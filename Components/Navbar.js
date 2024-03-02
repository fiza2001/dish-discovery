"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./homepage.css";


export default function Navbar() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="nav-main">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="#">Dish Discovery</a>
          </div>
          <div
            className={`main_list ${showList ? "show_list" : ""}`}
            id="mainListDiv"
          >
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/cuisines">Cuisines</Link>
              </li>
              <li>
                <Link href="#">Saved</Link>
              </li>
              <li>
                <Link href="/create">Create Recipe</Link>
              </li>
            </ul>
          </div>
          <div className="media_button">
            <button
              className={`main_media_button ${showList ? "active" : ""}`}
              onClick={toggleList}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <br />
      
    </div>
  );
}

