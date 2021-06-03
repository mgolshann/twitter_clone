import { Divider } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAllTweets } from '../../api/api_tweet';
import Header from '../../components/header/Header';
import TweetList from '../home/components/TweetList';
import useStyle from '../home/styles';


const TweetByHashTag = (props) => {
    const classes = useStyle();
    const [tweets , setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert(data.message);
            setTweets(data)
        })
    }, []);

    
    return (
        <div className={classes.root}>
            <Header title={ props.match.params.hashtag } icon={<img src={"/images/hashtag.png"} />} />
            <Divider className={classes.divider} />
            <TweetList data={tweets}/>
        </div>
    )
};


export default TweetByHashTag;