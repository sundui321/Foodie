import React, { useState, useEffect } from 'react';
import "../components/AppLayout.scss";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHome, faSignOutAlt, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import store from "store";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';


const RandomMeal = ({history}) => {
    const [meal, setMeal] = useState(undefined);
    
    useEffect(() => {  
        async function getMeal() {
            const res = await fetch(API_URL);
            const data = await res.json();
    
            setMeal(data.meals[0]);
        }  

        getMeal();
    }, [])

    useEffect(() => {
        return () => {
            if(history.action === "POP") {
                history.goBack();
            }
        }
    })

    const homeHandle = () => {
        if(store.get('userID') !== null) {
            history.replace('/accounts/loggedhome');
        }
        else {
            history.replace('/home');
        }
    }
    
    if(!meal) return null;

    const {
        strMealThumb,
        strArea,
        strCategory,
        strMeal,
        strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,
        strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,
        strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,
        strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20,
    } = meal;

    return (
        <motion.div className="profile-container" 
            animate={{ 
                x: -1600, 
                backgroundColor: "none",
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", position: "fixed",
                transitionEnd: { display: "1"}}} 
            transition={{duration: 2}}>
            <div className="prof-title">
                <button >Foodie</button>
            </div>
            <div className="prof-menu">
                <button className="home" onClick={homeHandle}>
                    <FontAwesomeIcon className="icon" icon={faHome} size="lg"/>홈
                </button>
                <button className="reccomend">
                    <FontAwesomeIcon className="icon" icon={faUtensils} size="lg"/>음식 추천
                </button>
                <button className="profile">
                    <FontAwesomeIcon className="icon" icon={faAddressCard} size="lg"/>회원정보
                </button>
                <button className="logout">
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} size="lg"/>로그아웃
                </button>
            </div>
            <div className="recom-content">
                <div className="meal-img">
                    <img src={strMealThumb} className="image" alt={strMeal}/>
                </div>
                <div className="recom-title">추천 음식</div>
                <h2 className="meal-title">{strMeal}</h2>
                <div className="meal-detail">
                    <p className="meal-ingredients">{strIngredient1 + ", " +  strIngredient2 +", "+ strIngredient3+", "+ strIngredient4+", "+ strIngredient5+", "+ strIngredient6
                                +", "+ strIngredient7+", "+ strIngredient8+", "+ strIngredient9+", "+ strIngredient10+", "+ strIngredient11+", "+ strIngredient12+", "
                                + strIngredient13+", "+ strIngredient14 +", "+ strIngredient15+", "+ strIngredient16+", "+ strIngredient17+", "+ strIngredient18+", "
                                + strIngredient19+", "+ strIngredient20}
                    </p>
                </div>
                <ul className="meal-info">
                    <li>
                        Category:
                        <strong>{strCategory}</strong>
                    </li>
                    <li>
                        Area:
                        <strong>{strArea}</strong>
                    </li>
                </ul>
            </div>
       </motion.div>
     )
}

export default RandomMeal;