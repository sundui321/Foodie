import React, { useState } from "react";
import "./AppLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import swal from "sweetalert";
import Popup from "reactjs-popup";

function AppLayout({children}) {

    let data = {
        name:''
    }
    
    const [food1, setFood1] = useState('');
    const [food2, setFood2] = useState('');
    const [food3, setFood3] = useState('');
    const [food4, setFood4] = useState('');
    const [food5, setFood5] = useState('');
    const [srch, setSrch] = useState();
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');

    data.name = srch;

    const foodsearch = () => {
        
        console.log(data);
        axios.post("http://13.209.208.168:8000/Search", data).then(
            (response) => {
                console.log(response.data);
                setFood1(response.data[0]);
                setFood2(response.data[1]);
                setFood3(response.data[2]);
                setFood4(response.data[3]);
                setFood5(response.data[4]);
            }
        )
        .catch (
            (error) => {
               swal("다시 입력해주세요", "", "warning");
            }
        )
    }


    const loadPhoto = (food = {name:""}) => {
        
        let config = {
            headers: {
                Authorization: "KakaoAK b4c138f29da1dd8276eb35307e7ed5fc"
            }
        }

        axios.get("https://dapi.kakao.com/v2/search/image?query=" + food.name, config).then(
            (response) => {
                console.log(response.data.documents[0].image_url);
                console.log(response.data.documents[1].image_url);
                setImage1(response.data.documents[0].image_url);
                setImage2(response.data.documents[1].image_url);
            }
        )
        .catch(
            (error) => {
                const errorHandle = "음식 아이콘";
                axios.get("https://dapi.kakao.com/v2/search/image?query=" + errorHandle, config).then(
                    (response) => {
                        setImage1(response.data.documents[0].image_url);
                        setImage2(response.data.documents[0].image_url);
            }
        )
            }
        )
    }

    return (
        <div className="app">
            <div className="header">
                <h1 className="page-title">Foodie</h1>
                <div className="search" >
                    <input  className="search-input" placeholder="입력하세요" onChange={e => setSrch(e.target.value)}></input>
                    
                    <Popup className="popup1" onOpen={() => {foodsearch()}} trigger={
                        <button className="search-btn" type="submit" onClick={foodsearch}>
                            <FontAwesomeIcon className="search-icon" icon={faSearch} size="lg"></FontAwesomeIcon>
                        </button>}>

                            <div className="search-container">
                                <Popup className="popup2" onOpen={() => {foodsearch(); loadPhoto(food1)}} trigger={
                                    <div className="food-searched1">
                                        <p type="text" className="foodname1">{food1.name}</p>
                                        <p type="text" className="food1-ing" >{food1.subject}</p>
                                    </div>}>
                                        <div className="food-container1">
                                            <div className="food-contents1">
                                                <p type="text" className="foodname1">{food1.name}</p>
                                            </div>
                                            <div className="food-contents1">
                                                <img src={image1} className="food1-img1" alt="food" width="300px" height="300px"/>
                                                <img src={image2} className="food1-img2" alt="food" width="300px" height="300px"/>
                                            </div>
                                        <div className="food-contents1">
                                            <p type="text" className="food1-ing" >{food1.subject}</p>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup className="popup2" onOpen={() => {foodsearch(); loadPhoto(food2)}} trigger={
                                    <div className="food-searched2">
                                        <p type="text" className="foodname2">{food2.name}</p>
                                        <p type="text" className="food2-ing" >{food2.subject}</p>
                                    </div>}>
                                        <div className="food-container2">
                                            <div className="food-contents2">
                                                <p type="text" className="foodname2">{food2.name}</p>
                                            </div>
                                            <div className="food-contents2">
                                                <img src={image1} className="food2-img1" alt="food" width="300px" height="300px"/>
                                                <img src={image2} className="food2-img2" alt="food" width="300px" height="300px"/>
                                        </div>
                                        <div className="food-contents2">
                                            <p type="text" className="food2-ing" >{food2.subject}</p>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup className="popup2" onOpen={() => {foodsearch(); loadPhoto(food3)}} trigger={
                                    <div className="food-searched3">
                                        <p type="text" className="foodname3">{food3.name}</p>
                                        <p type="text" className="food3-ing" >{food3.subject}</p>
                                    </div>}>
                                        <div className="food-container3">
                                            <div className="food-contents3">
                                                <p type="text" className="foodname3">{food3.name}</p>
                                            </div>
                                            <div className="food-contents3">
                                                <img src={image1} className="food3-img1" alt="food" width="300px" height="300px"/>
                                                <img src={image2} className="food3-img2" alt="food" width="300px" height="300px"/>
                                        </div>
                                        <div className="food-contents3">
                                            <p type="text" className="food3-ing" >{food3.subject}</p>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup className="popup2" onOpen={() => {foodsearch(); loadPhoto(food4)}} trigger={
                                    <div className="food-searched4">
                                        <p type="text" className="foodname4">{food4.name}</p>
                                        <p type="text" className="food4-ing" >{food4.subject}</p>
                                    </div>}>
                                        <div className="food-container4">
                                            <div className="food-contents4">
                                                <p type="text" className="foodname4">{food4.name}</p>
                                            </div>
                                            <div className="food-contents4">
                                                <img src={image1} className="food4-img1" alt="food" width="300px" height="300px"/>
                                                <img src={image2} className="food4-img2" alt="food" width="300px" height="300px"/>
                                        </div>
                                        <div className="food-contents4">
                                            <p type="text" className="food4-ing" >{food4.subject}</p>
                                        </div>
                                    </div>
                                </Popup>

                                <Popup className="popup2" onOpen={() => {foodsearch(); loadPhoto(food5)}} trigger={
                                    <div className="food-searched5">
                                        <p type="text" className="foodname5">{food5.name}</p>
                                        <p type="text" className="food5-ing" >{food5.subject}</p>
                                    </div>}>
                                        <div className="food-container5">
                                            <div className="food-contents5">
                                                <p type="text" className="foodname5">{food5.name}</p>
                                            </div>
                                            <div className="food-contents5">
                                                <img src={image1} className="food5-img1" alt="food" width="300px" height="300px"/>
                                                <img src={image2} className="food5-img2" alt="food" width="300px" height="300px"/>
                                        </div>
                                        <div className="food-contents5">
                                            <p type="text" className="food5-ing" >{food5.subject}</p>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                    </Popup>


                    {/* <Popup className="popup" onOpen={() => {foodsearch(); loadPhoto()}} trigger={
                            <button className="search-btn" type="submit" onClick={foodsearch}>
                                <FontAwesomeIcon className="search-icon" icon={faSearch} size="lg"></FontAwesomeIcon>
                            </button>}>
                            <div className="food-container">
                                <div className="food-contents">
                                    <p type="text" className="foodname">{food.name}</p>
                                </div>
                                <div className="food-contents">
                                    <img src={image1} className="food-img1" alt="food" width="300px" height="300px"/>
                                    <img src={image2} className="food-img2" alt="food" width="300px" height="300px"/>
                                </div>
                                
                                <div className="food-contents">
                                    <p type="text" className="food-ing" >{food.subject}</p>
                                </div>
                            </div>
                        </Popup> */}

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