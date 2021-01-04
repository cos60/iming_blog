import { useState, useEffect } from 'react';
import './index.css'
import { Spin, Card, Input, Button, message } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '../config/login.api';



function Login(props) {

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = ()=>{
        setIsLoading(true)
        if(userName && password) {
            login({password, userName}).then(res => {
                if (res.data.errCode === 0) {
                    message.success(res.data.msg);
                    localStorage.setItem('openId',res.data.data.openId);
                    props.history.push('/')
                } else {
                    message.error(res.data.msg);
                }
                setIsLoading(false);
            });
        } else {
            message.error('请输入帐号密码');
            setIsLoading(false);
        }
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="IMING-BLOG" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;