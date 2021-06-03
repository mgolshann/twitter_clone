import { Button, Input, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../api/api_auth';
import useStyle from './styles';

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {
    const classes = useStyle();

    const [tab, setTab] = useState(LOGIN_TAB_VALUE);

    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    const [fullnameRegister, setFullNameRegister] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confPasswordRegister, setConfPasswordRegister] = useState();

    const validateLogin = (user) => {
        if (!user.username) return "نام کاربری را وارد کنید";
        if (!user.password) return "رمز عبور را وارد کنید";
    }

    const validateRegister = (user) => {
        if (!user.username) return "نام کاربری را وارد کنید";
        if (!user.name) return "لطفا نام خود را وارد کنید";
        if (!user.password) return "رمز عبور را وارد کنید";
        if (user.password !== user.confPasswordRegister) return "رمز عبور با تکرار آن یکسان نیست";
    }

    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        };

        const error = validateLogin(user);
        if (error) return toast.warn(error)

        loginApi(user, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            toast.success("شما با موفقیت وارد شدید");

            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);

            window.location.reload();
        });
    }

    const handleRegister = () => {
        const user = {
            name: fullnameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confPasswordRegister: confPasswordRegister
        };
        const error = validateRegister(user);
        if (error) return toast.warn(error);
        user.confPasswordRegister = undefined;

        registerApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data);
            toast.success("شما با موفقیت ثبت نام کردید");   

            localStorage.setItem("name", data.name);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"])
        });
    }

    const handleChange = (e, newValue) => {
        setTab(newValue);
    }

    return (
        <Paper className={classes.root}>
            <Typography className={classes.headerText}>خوش آمدید به توتیر میراث فرهنگی</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab} />
                <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
            </Tabs>

            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Button variant={"contained"} color={"primary"} onClick={handleLogin}>ورود</Button>
                </div>
            }

            {tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input value={fullnameRegister} onChange={e => setFullNameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Typography>نام کاربری</Typography>
                    <Input value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Typography>تکرار رمز عبور</Typography>
                    <Input value={confPasswordRegister} onChange={e => setConfPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Button variant={"contained"} color={"primary"} onClick={handleRegister}>ثبت نام</Button>
                </div>
            }

        </Paper>)
};

export default AuthPage;