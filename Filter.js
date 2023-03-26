import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d-flex align-items-center">
      <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Mixes</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Music</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">live</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Simplilearn</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">computer</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Programming</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">ReactJS</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">VueJS</span>
      </div>
      <div className="single-filter">
        <svg
          viewBox="0 0 16 13"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{"width":"20px"}}
        >
          <g mirror-in-rtl="" class="style-scope yt-icon">
            <path
              d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
export default Filter;
