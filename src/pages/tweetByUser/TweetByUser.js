import { Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import TweetList from '../home/components/TweetList';
import useStyle from '../home/styles';
import PersonIcon from '@material-ui/icons/AccountCircle';
import Axios from 'axios';
import { getAllTweets, getTweetByUserRequest } from '../../api/api_tweet';
import { useLocation } from 'react-router-dom';


const TweetByUser = (props) => {

    const classes = useStyle();
    const [tweets, setTweets] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTweetByUserRequest(props.match.params.id, (isOk, data) => {
            if (!isOk)
                return alert(data.message);
            setTweets(data)
        })
    }, [location]);

    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<PersonIcon />} />
            <Divider className={classes.divider} />
            {tweets.length === 0 &&
                <Typography>این کاربر توییتی نداشته است</Typography>
            }
            <TweetList data={tweets} />
        </div>
    )
};


export default TweetByUser;