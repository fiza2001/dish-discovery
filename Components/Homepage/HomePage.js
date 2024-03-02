"use client";
import "../homepage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HomePage(){
    return(
        <>
        {/* <search */}
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" class="searchButton">
            <FontAwesomeIcon icon={faSearch} size="sm" color="white" />
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* cuisine */}
      <div className="cuisine">
        <p>PERSONALIZE YOUR EXPERIENCE</p>
        <h2>What are Your Favorite Cuisines?</h2>
        <br />
        <br />
        <div class="text-center cuisine-li">
          <div>
            <div class="circle">American</div>
          </div>
          <div>
            <div class="circle">French</div>
          </div>
          <div>
            <div class="circle">Indian</div>
          </div>
          <div>
            <div class="circle">Mexican</div>
          </div>
        </div>
      </div>
        </>
    )
}