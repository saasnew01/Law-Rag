import React from 'react';
import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import './styles.css';

export default function Home() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <ChatSection />
      </main>

      <footer className="app-footer">
        <p>© 2024 YourAppName. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles (consider adding these in a separate CSS file)
// .app-container {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   background: #f7f7f7; // A light and neutral background color
// }

// .main-content {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   padding: 20px;
//   background-color: #ffffff; // White background for content area
//   border-radius: 8px; // Rounded corners for the content area
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
//   margin: 20px;
// }

// .app-footer {
//   text-align: center;
//   padding: 10px;
//   background-color: #333333; // Dark footer for contrast
//   color: #ffffff; // White text for readability
// }
