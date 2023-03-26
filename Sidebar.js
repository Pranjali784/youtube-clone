import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar d-flex align-items-center pointer ">
      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M4,10V21h6V15h4v6h6V10L12,3Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Home</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Explore</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Shorts</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Subscriptions</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Youtube Music</span>
      </div>
<p></p>
      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Library</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">History</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Your Videos</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Watch later</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Downloads</span>
      </div>

      <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">liked Videos</span>
      </div>
    </div>
  );
}
export default Sidebar;
