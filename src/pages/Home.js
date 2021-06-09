import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout.js";
import "../components/AppLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import store from 'store';

function Home({history}) {
    useEffect(() => {
        store.set('userID', -1);
    },[])

    const homeHandle = () => {
        history.replace('/home');
    }

    const loginHandle = () => {
        history.replace('/');
    }

    const recomHandle = () => {
        history.replace('/randommeal');
    }

    return(
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <AppLayout>
                <div className="contents">
                    
                    <div id="myMenu" className="menu">
                        <button className="home" onClick={homeHandle}>
                            <FontAwesomeIcon className="icon" icon={faHome} size="lg"/>홈
                        </button>
                        <button className="reccomend" onClick={recomHandle}>
                            <FontAwesomeIcon className="icon" icon={faUtensils} size="lg"/>음식 추천
                        </button>
                        <button className="login" onClick={loginHandle}>
                            <FontAwesomeIcon className="icon" icon={faUsers} size="lg"/>로그인
                        </button>
                    </div> 
                </div>
            </AppLayout>
        </motion.div>
    );
}

export default Home;