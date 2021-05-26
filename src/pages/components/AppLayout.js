import React from "react";
import "./AppLayout.scss";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faSearch } from "@fortawesome/free-solid-svg-icons";


function AppLayout({children}) {
    return (
        <div className="app">
            <div className="header">
                <h1 className="page-title">Foodie</h1>
                <div className="search">
                    <input  className="search-input" placeholder="입력하세요"></input>
                    <button className="search-btn" type="submit">
                        <FontAwesomeIcon className="search-icon" icon={faSearch} size="lg"></FontAwesomeIcon>
                    </button>
                    <button className="img-search" >
                        <FontAwesomeIcon className="search-icon" icon={faImages} size="lg"></FontAwesomeIcon>
                        <input className="img-search-btn" type="file"></input>
                    </button>
                    
                </div>
            </div>
            <div className="contents">
                {children}
            </div>
        </div>
    );
}

export default AppLayout;