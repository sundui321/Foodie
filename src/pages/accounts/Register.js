import React from "react";
import { Link } from "react-router-dom";
import "../../components/Login.scss";
import { motion } from "framer-motion";
import axios from 'axios';
import swal from 'sweetalert';


class Register extends React.Component {
    


    constructor(props) {
        super(props)

        this.state = {
            username:'', password:'', email:'', checkpassword:''
        }
    }

    inputChanged = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    register_request = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://127.0.0.1:8000/users/', this.state)
        .then(
            (response) => {
                if(response.status) {
                    swal("가입되었습니다.", "로그인화면으로 이동합니다.", "success",
                        {button: "로그인"}).then((result) => {
                            window.location.href = `/`
                        });
                    axios.post("https://127.0.0.1:8000/profile/", this.state.username);
                }
            }
        )
        .catch (
            (error) => {
                if(this.state.username.length === 0) {
                    swal("사용자ID를 입력해주세요!", "", "warning");
                }
                else if(this.state.password.length === 0) {
                    swal("비밀번호를 입력해주세요!", "", "warning");
                }
                else if(this.state.email.length === 0) {
                    swal("이메일을 입력해주세요!", "", "warning");
                }
                else if(this.state.checkpassword.length === 0) {
                    swal("비밀번호를 한번 더 입력해주세요!", "", "warning");
                }
                else if(this.state.checkpassword !== this.state.password) {
                    swal("비밀번호가 일치하지 않습니다!", "", "warning");
                }
                else if(!this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
                    swal("잘못된 이메일 형식입니다!", "", "warning");
                }
                else {
                    swal("사용불가능한 ID입나다!", "", "warning");
                }
            }
        )
    }
    

    render() {
        return(
            <div className="base-container">
                    <div className="reg-title">회원가입</div>
                    <motion.div className="content" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
                        <div className="form" >
                            <div className="form-group">
                                <input type="text" name="username" placeholder="사용자ID" value={this.state.username} onChange={this.inputChanged}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="비밀번호" value={this.state.password} onChange={this.inputChanged}/>
                            </div>
                            {<div className="form-group">
                                <input type="password" name="checkpassword" placeholder="비밀번호 확인" value={this.state.checkpassword} onChange={this.inputChanged} />
                            </div>}
                            {<div className="form-group">
                                <input type="text" name="email" placeholder="이메일" value={this.state.email} onChange={this.inputChanged}/>
                            </div>}
                            <div className="form-group">
                                <button type="button" className="btn" onClick={this.register_request} >가입하기</button>
                            </div>
                            <div className="form-group">
                                <div className="goto-log">
                                        <Link to="/" >로그인</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            </div>
        );
    }
    
}

export default Register;