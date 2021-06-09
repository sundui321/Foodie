import React, { useState } from "react";
import "../../components/AppLayout.scss";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHome, faSignOutAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
import AppLayout from "../../components/AppLayout.js"
import { motion } from "framer-motion";
import store from "store";
import axios from 'axios';

function LoggedHome({ history }) {

    const [data, setData] = useState("");
    let userID = '';

    const getID = () => {
        axios.get('http://13.209.208.168:8000/users/').then(
            (response) => {
                setData(response.data);
                let index=0;
                while(response.data[index].username !== store.get('username')) {
                    index++;
                }
                userID = response.data[index].id;
                store.set('userID', userID);            
            }
        )
    }

    

    const logoutHandle = () => {
        store.remove('username');
        store.remove('userID');
        history.push('/');
    }

    const profileHandle = () => {
        getID();       
        history.replace('/accounts/profile/');
    }

    const recomHandle = () => {
        history.replace('/randommeal');
    }

    return (
       <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.7}}>
           <AppLayout>
               <div className="contents">
                    <div id="myMenu" className="menu">
                        <button className="home">
                            <FontAwesomeIcon className="icon" icon={faHome} size="lg"/>홈
                        </button>
                        <button className="reccomend" onClick={recomHandle}>
                            <FontAwesomeIcon className="icon" icon={faUtensils} size="lg"/>음식 추천
                        </button>
                        <button className="profile" onClick={profileHandle}>
                            <FontAwesomeIcon className="icon" icon={faAddressCard} size="lg"/>회원정보
                        </button>
                        <button  className="logout" onClick={logoutHandle}>
                            <FontAwesomeIcon className="icon" icon={faSignOutAlt} size="lg"/>로그아웃
                        </button>
                    </div> 
                </div>
           </AppLayout>
       </motion.div>
    );
}

export default LoggedHome;