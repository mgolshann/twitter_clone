import { Divider } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllTweets, getTweetByHashTagsRequest } from '../../api/api_tweet';
import Header from '../../components/header/Header';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import TweetList from '../home/components/TweetList';
import useStyle from '../home/styles';


const TweetByHashTag = (props) => {
    const classes = useStyle();
    const location = useLocation();
    //const [tweets , setTweets] = useState([]);

    const { tweetList: tweets } = useTweetState();
    const tweetDispatch = useTweetDispatch();

    useEffect(() => {
        getTweetByHashTagsRequest(props.match.params.hashtag, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            setTweetList(tweetDispatch, data)
        })
    }, [location]);


    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/hashtag.png"} />} />
            <Divider className={classes.divider} />
            <TweetList data={tweets} />
        </div>
    )
};


export default TweetByHashTag;