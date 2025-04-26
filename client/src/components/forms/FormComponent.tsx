import React from "react";
import { useAppContext } from "@/context/AppContext"
import { useSocket } from "@/context/SocketContext"
import { SocketEvent } from "@/types/socket"
import { USER_STATUS } from "@/types/user"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { toast } from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import logo from "@/assets/logo.svg"
import { motion } from "framer-motion"

const FormComponent = () => {
    const location = useLocation()
    const { currentUser, setCurrentUser, status, setStatus } = useAppContext()
    const { socket } = useSocket()
    const [isGenerating, setIsGenerating] = useState(false)

    const usernameRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    const createNewRoomId = () => {
        setIsGenerating(true)
        setTimeout(() => {
            setCurrentUser({ ...currentUser, roomId: uuidv4() })
            toast.success("Created a new Room ID")
            usernameRef.current?.focus()
            setIsGenerating(false)
        }, 600)
    }

    const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const validateForm = () => {
        if (currentUser.username.trim().length === 0) {
            toast.error("Enter your username")
            return false
        } else if (currentUser.roomId.trim().length === 0) {
            toast.error("Enter a room id")
            return false
        } else if (currentUser.roomId.trim().length < 5) {
            toast.error("ROOM Id must be at least 5 characters long")
            return false
        } else if (currentUser.username.trim().length < 3) {
            toast.error("Username must be at least 3 characters long")
            return false
        }
        return true
    }

    const joinRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (status === USER_STATUS.ATTEMPTING_JOIN) return
        if (!validateForm()) return
        toast.loading("Joining room...")
        setStatus(USER_STATUS.ATTEMPTING_JOIN)
        socket.emit(SocketEvent.JOIN_REQUEST, currentUser)
    }

    useEffect(() => {
        if (currentUser.roomId.length > 0) return
        if (location.state?.roomId) {
            setCurrentUser({ ...currentUser, roomId: location.state.roomId })
            if (currentUser.username.length === 0) {
                toast.success("Enter your username")
            }
        }
    }, [currentUser, location.state?.roomId, setCurrentUser])

    useEffect(() => {
        if (status === USER_STATUS.DISCONNECTED && !socket.connected) {
            socket.connect()
            return
        }

        const isRedirect = sessionStorage.getItem("redirect") || false

        if (status === USER_STATUS.JOINED && !isRedirect) {
            const username = currentUser.username
            sessionStorage.setItem("redirect", "true")
            navigate(`/editor/${currentUser.roomId}`, {
                state: {
                    username,
                },
            })
        } else if (status === USER_STATUS.JOINED && isRedirect) {
            sessionStorage.removeItem("redirect")
            setStatus(USER_STATUS.DISCONNECTED)
            socket.disconnect()
            socket.connect()
        }
    }, [currentUser, location.state?.redirect, navigate, setStatus, socket, status])

    return (
        <div className="flex w-full flex-col items-center justify-center gap-6 p-6 sm:p-8">
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[280px]"
            >
                <img src={logo} alt="Logo" className="w-full drop-shadow-lg" />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
            >
                <h2 className="text-center text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Join Collaborative Session
                </h2>
                
                <form onSubmit={joinRoom} className="flex w-full flex-col gap-5">
                    <div className="relative">
                        <motion.div 
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 opacity-70"
                            animate={{ 
                                rotate: isGenerating ? [0, 360] : 0 
                            }}
                            transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                            </svg>
                        </motion.div>
                        <input
                            type="text"
                            name="roomId"
                            placeholder="Room ID"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-offset-1 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800 dark:text-white bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            onChange={handleInputChanges}
                            value={currentUser.roomId}
                        />
                    </div>
                    
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-offset-1 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800 dark:text-white bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            onChange={handleInputChanges}
                            value={currentUser.username}
                            ref={usernameRef}
                        />
                    </div>
                    
                    <motion.button
                        type="submit"
                        className="relative mt-2 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 overflow-hidden"
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Join Session</span>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.button>
                </form>
                
                <motion.button
                    className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm text-blue-600 dark:text-purple-400 font-medium transition-colors hover:text-blue-800 dark:hover:text-purple-300"
                    onClick={createNewRoomId}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isGenerating}
                >
                    {isGenerating ? (
                        <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                    )}
                    Generate Unique Room ID
                </motion.button>
            </motion.div>
        </div>
    )
}

export default FormComponent
