# CodeTogether

<div align="center">
  
  ![CodeTogether Logo](https://img.shields.io/badge/CodeTogether-Collaborative%20Coding-blue?style=for-the-badge&logo=code&logoColor=white)
  
  A collaborative, real-time code editor where multiple developers can seamlessly work together on the same codebase.
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://eliteapp.tech/)
  [![GitHub Stars](https://img.shields.io/github/stars/yourusername/CodeTogether?style=for-the-badge&logo=github&logoColor=white&color=yellow)](https://github.com/yourusername/CodeTogether/stargazers)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
</div>

## 📋 Overview

CodeTogether provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously. With real-time synchronization, comprehensive language support, and integrated communication tools, it creates an ideal environment for pair programming, teaching, and collaborative development.

## 🔮 Key Features

### Collaboration Tools
- 💻 **Real-time Code Editing**: Collaborate on code across multiple files with instant synchronization
- 📁 **File Management**: Create, open, edit, save, delete, and organize files and folders
- 💾 **Export Options**: Download the entire codebase as a zip file
- 🚀 **Room System**: Generate unique room IDs for secure collaboration sessions

### Development Experience
- 🌍 **Language Support**: Comprehensive language support for versatile programming
- 🌈 **Syntax Highlighting**: Automatic language detection and highlighting for various file types
- 🚀 **Code Execution**: Run code directly within the collaboration environment
- 💡 **Auto Suggestions**: Intelligent code suggestions based on programming language

### User Experience
- 👥 **User Presence**: See who's currently in the session with online/offline status indicators
- 🎩 **Editing Tooltips**: Real-time tooltips showing which users are currently editing
- 💬 **Group Chat**: Communicate in real-time while working on code
- 🎨 **Collaborative Drawing**: Draw and sketch together to explain concepts visually
- 🔠 **Customization**: Change font size, font family, and choose from multiple themes

### Security & Administration
- 🔒 **Secure Authentication**: Email-based OTP verification during signup
- 👑 **Admin Controls**: Room creators have special privileges:
  - Grant or revoke access to individual users
  - Provide access to all users at once
  - Maintain control over editing permissions
- 🤖 **AI Assistant**: Integrated AI helper for coding tasks and programming questions

## 🚀 Live Preview

You can view the live preview of the project [here](https://eliteapp.tech/).

## 💻 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ⚙️ Installation

1. **Fork this repository**
   
   Click the Fork button located in the top-right corner of this page to fork the repository.

2. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/<your-username>/CodeTogether.git
   \`\`\`

3. **Set environment variables**
   
   Inside the client and server directories rename the `.env.example` file to `.env` and set the following environment variables:

   **Frontend (`client/.env`):**
   \`\`\`bash
   VITE_BACKEND_URL=<your_server_url>
   \`\`\`
   
   **Backend (`server/.env`):**
   \`\`\`bash
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   \`\`\`

4. **Install dependencies**
   \`\`\`bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   \`\`\`

5. **Start the frontend and backend servers**
   \`\`\`bash
   # Start frontend
   cd client
   npm run dev

   # Start backend
   cd ../server
   npm run dev
   \`\`\`

6. **Run tests**
   \`\`\`bash
   # Run frontend tests
   cd client
   npm test

   # Run backend tests
   cd ../server
   npm test
   \`\`\`

7. **Access the application**
   \`\`\`
   http://localhost:5173/
   \`\`\`

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository and create your branch from `main`
2. Make your changes and ensure the code follows the project's style
3. Run tests to ensure your changes don't break existing functionality
4. Submit a pull request with a comprehensive description of changes

## 🔮 Future Roadmap

- **Enhanced Admin System**: Implement a more robust admin permission system to manage user access levels
- **AI Improvements**: Expand AI assistant capabilities with more language-specific features
- **Version Control**: Integration with Git and other version control systems
- **Advanced Execution**: Support for more programming languages and execution environments
- **Mobile Support**: Responsive design for coding on tablets and mobile devices

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by developers, for developers</sub>
</div>
\`\`\`

This README.md file is specifically formatted for GitHub and includes:

1. **Professional Header**: With badges and a concise project description
2. **Well-Organized Sections**: Clear headings and logical content flow
3. **Feature Highlights**: Grouped by category with emoji icons for visual appeal
4. **Detailed Installation Guide**: Step-by-step instructions with proper code formatting
5. **Contributing Guidelines**: Clear instructions for potential contributors
6. **Future Roadmap**: Outlining planned features for upcoming releases
7. **Proper Markdown Formatting**: Using GitHub-compatible Markdown syntax

The file maintains all the important information from your original README while presenting it in a more professional and visually appealing format that will display correctly on GitHub.

