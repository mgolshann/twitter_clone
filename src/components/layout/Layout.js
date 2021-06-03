import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProfileRequest } from '../../api/api_auth';
import TweetByHashTag from '../../pages/tweetByHashTag/TweetByHashTag';
import TweetByUser from '../../pages/tweetByUser/TweetByUser';
import LeftSideBar from '../leftSidebar/LeftSideBar';
import RightSidebar from '../rightSidebar/RightSidebar';
import useStyle from './styles';

const Layout = (props) => {

    const classes = useStyle();
    const history = useHistory();
    const [wait, setWait] = useState(true);

    useEffect(() => {
        getProfileRequest((isOk, data) => {
            if (!isOk) {
                toast.error(data);
                localStorage.clear();
                return history.push("/login");
            }
            setWait(false);
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"])
        })
    }, []);

    if (wait)
        return <div className={classes.parentWait}>
            <CircularProgress />
            <Typography>لطفا کمی شکیبا باشید ...</Typography>
        </div>
    else
        return <div className={classes.root}>
            <RightSidebar />
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.content}>
                {props.children}
            </div>
            <Divider orientation={"vertical"} className={classes.divider} />
            <LeftSideBar />
        </div>

};

export default Layout;