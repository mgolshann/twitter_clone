import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import HomeIcon from '@material-ui/icons/Home';
import NewTweet from './components/NewTweet';
import TweetList from './components/TweetList';
import useStyle from './styles';
import Axios from 'axios';
import { getAllTweets } from '../../api/api_tweet';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';

const Home = () => {

    const classes = useStyle();
    const { tweetList: tweets } = useTweetState();
    const tweetDispatch = useTweetDispatch();
    // const [tweets, setTweets] = useState([]);

    useEffect(() => {
        updateTweets();
    }, []);

    const updateTweets = () => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert(data.message);
            setTweetList(tweetDispatch, data)
        })
    }

    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon />} />
            <Divider className={classes.divider} />
            <NewTweet updateTweets={updateTweets} />
            <TweetList data={tweets} />
        </div>
    )
};

export default Home;