import React from "react";
import AppLayout from "components/AppLayout";
import "components/AppLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faUtensils } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { motion } from 'framer-motion';

function Home() {
/*    const getData = () => {
        axios.get("http://127.0.0.1:8000/pybo/").then(
            (response) => {
                console.log(response);
            }
        )
    }
*/    
    return(
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <AppLayout>
                <div className="contents">
                    
                    <div id="myMenu" className="menu">
                        <a href="/home" className="home">
                            <FontAwesomeIcon className="icon" icon={faHome} size="lg"/>홈
                        </a>
                        <a href="/randommeal" className="reccomend">
                            <FontAwesomeIcon className="icon" icon={faUtensils} size="lg"/>음식 추천
                        </a>
                        <a href="/accounts/login" className="login">
                            <FontAwesomeIcon className="icon" icon={faUsers} size="lg"/>로그인
                        </a>
                    </div> 
                </div>
            </AppLayout>
        </motion.div>
    );
}

export default Home;