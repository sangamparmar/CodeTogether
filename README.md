# CodeTogether

A collaborative, real-time code editor where users can seamlessly code together. It provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously.

## 🔮 Features

- 💻 Real-time collaboration on code editing across multiple files
- 📁 Create, open, edit, save, delete, and organize files and folders
- 💾 Option to download the entire codebase as a zip file
- 🚀 Unique room generation with room ID for collaboration
- 🌍 Comprehensive language support for versatile programming
- 🌈 Syntax highlighting for various file types with auto-language detection
- 🚀 Code Execution: Users can execute the code directly within the collaboration environment, providing instant feedback and results.
- ⏱️ Instant updates and synchronization of code changes across all files and folders
- 📣 Notifications for user join and leave events
- 👥 User presence list of users currently in the collaboration session, including online/offline status indicators
- 💬 Group chatting allows users to communicate in real-time while working on code.
- 🎩 Real-time tooltip displaying users currently editing
- 💡 Auto suggestion based on programming language
- 🔠 Option to change font size and font family
- 🎨 Multiple themes for personalized coding experience
- 🎨 Collaborative Drawing: Enable users to draw and sketch collaboratively in real-time, enhancing the interactive experience of your project.

## 🚀 Live Preview

You can view the live preview of the project [here](https://code-sync-live.vercel.app/).

## 💻 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ⚙️ Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page to fork the repository.
2. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/CodeTogether.git
    ```
3. **Set .env file:**
   Inside the client and server directories rename the `.env.example` file to `.env` and set the following environment variables:

    Frontend:

    ```bash
    VITE_BACKEND_URL=<your_server_url>
    ```

    Backend:

    ```bash
    PORT=3000
    ```

4. **Install dependencies:**
   Navigate to the frontend and backend directories separately and run:
    ```bash
     npm install
    ```
5. **Start the frontend and backend servers:**  
   Frontend:
    ```bash
    cd client
    npm run dev
    ```
    Backend:
    ```bash
    cd server
    npm run dev
    ```
6. **Access the application:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:5173/
    ```

## 🔮 Features for next release

- **Admin Permission:** Implement an admin permission system to manage user access levels and control over certain platform features.

## 🧾 License

This project is licensed under the [MIT License](LICENSE).
