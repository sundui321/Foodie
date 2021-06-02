import React, {useState, useEffect} from "react";
import "../../components/AppLayout.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHome, faSignOutAlt, faUtensils, faEdit, faCarrot, faDrumstickBite, faPepperHot, faAppleAlt, faHamburger, faPizzaSlice, faBreadSlice, faIceCream, faFish, faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faLemon } from "@fortawesome/free-regular-svg-icons";
//import AppLayout from "components/AppLayout"
import { motion } from "framer-motion";
import axios from 'axios';
import store from "store";

function Profile( {history} ) {
    
    const [data, setData] = useState("");
    let userID = '';

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users/${store.get('userID')}`).then(
            (response) => {
                setData(response.data);
            }
        )
    },[])

    const logoutHandle = () => {
        store.remove('userID');
        store.remove('username');
        history.push('/');
    }

    const profileHandle = () => {
        history.replace('/accounts/profile/');
    }



    return (
       <motion.div className="profile-container" 
            animate={{ 
                x: -1600, 
                backgroundColor: "#000",
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", position: "fixed",
                transitionEnd: { display: "1"}}} 
            transition={{duration: 2}}>
            <div className="prof-title">
                <a href="/accounts/loggedhome">Foodie</a>
            </div>
            <div className="prof-menu">
                <button className="home">
                    <FontAwesomeIcon className="icon" icon={faHome} size="lg"/>홈
                </button>
                <button className="reccomend">
                    <FontAwesomeIcon className="icon" icon={faUtensils} size="lg"/>음식 추천
                </button>
                <button className="profile" onClick={profileHandle}>
                    <FontAwesomeIcon className="icon" icon={faAddressCard} size="lg"/>회원정보
                </button>
                <button className="logout" onClick={logoutHandle}>
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} size="lg"/>로그아웃
                </button>
            </div>
            <div className="prof-content">

                <div className="title">회원 정보</div>
                
                <div className="information">
                <div className="area">
                    <ul className="circles">
                        <li><FontAwesomeIcon icon={faCarrot} size="4x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faDrumstickBite} size="2x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faPepperHot} size="lg" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faAppleAlt} size="3x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faHamburger} size="5x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faLemon} size="8x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faBreadSlice} size="6x" opacity="0.5"/></li>
                        <li><FontAwesomeIcon icon={faPizzaSlice} size="4x" opacity="0.5"/></li>
                        <li><FontAwesomeIcon icon={faFish} size="3x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faIceCream} size="10x" opacity="0.8"/></li>
                        <li><FontAwesomeIcon icon={faStroopwafel} size="2x" opacity="0.8"/></li>
                    </ul>
                </div>
                    <div className="inf-group">유저 네임: 
                        <input type="text" className="input-inf" value={data.username} contentEditable="false"/>
                        <button type="button" className="edtBtn"><FontAwesomeIcon icon={faEdit} size="1x"/></button>
                    </div>
                    <div className="inf-group">비밀번호:
                        <input type="password" className="input-inf" value={data.password}/>
                    </div>
                    <div className="inf-group">이메일:
                        <input type="text" className="input-inf" value={data.email}/>
                    </div>
                    <div className="inf-group">알레르기 정보:
                        <input type="text" className="input-inf" value="allergy information"/>
                    </div>
                    <div className="inf-group">좋아하는 재료:
                        <input type="text" className="input-inf" value="Like"/>
                    </div>
                    <div className="inf-group">싫어하는 재료:
                        <input type="text" className="input-inf" value="Hate"/>
                    </div>
                </div>
            </div>
       </motion.div>
    );
}

export default Profile;