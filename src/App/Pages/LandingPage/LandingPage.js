import React from "react";
import { Link } from "react-router-dom";

// style
import s from './LandingPage.module.css';

export default function LandingPage () {
    return (
        <div className={`${s.page} flex flex-justify-center flex-align-center`}>
            <div className={`${s.container} flex-column flex-justify-evenly flex-align-center`}>
                <div>REACT - REDUX - API</div>
                <div>SEARCH - FILTER</div>
                <Link to='/Home'>LET'S GO</Link>
            </div>
        </div>
    )
};