import React from "react";
import { Link } from "react-router-dom";
import "../components/Login.scss";
import { motion } from "framer-motion";
import axios from 'axios';
import swal from "sweetalert";
import store from "store";

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'', password:'', token:'',
        }
    }

    inputChanged = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    login_request = e => {
        const { history } = this.props;
        e.preventDefault();
        console.log(this.state);
       
        axios.get('http://127.0.0.1:8000/users/', this.state).then(
            (response) => {
                console.log(response);
                if(response.data.token.length > 0) {
                    swal("로그인되었습니다.", "", "success")/* .then((result) => {
                        window.location.href = `/accounts/loggedhome/`
                    }) */;
                    store.set('userID', this.state.username);
                    history.push('accounts/loggedhome/');
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
                else {
                    swal("사용자ID나 비밀번호가 올바르지 않습니다!", "", "error");
                }
            }
        ) 
    }

    
    render() {
        return(
            <div className="base-container">
                    <div className="login-title">로그인</div>
                    <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <div className="form">
                            <div className="form-group">
                                <input type="text" name="username" placeholder="사용자ID" value={this.state.username} onChange={this.inputChanged} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="비밀번호" value={this.state.password} onChange={this.inputChanged}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn" onClick={this.login_request}>로그인</button>
                            </div>  
                            <div className="form-group">
                                <div className="no-login">
                                    <Link to="/home">비회원으로 이용하기</Link>
                                </div>
                                <div className="goto-reg">
                                    <Link to="/accounts/register">회원 가입하기</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
        );
    }
}

export default Login;