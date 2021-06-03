import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import TweetList from '../home/components/TweetList';
import useStyle from '../home/styles';
import PersonIcon from '@material-ui/icons/AccountCircle';
import Axios from 'axios';
import { getAllTweets } from '../../api/api_tweet';


const TweetByUser = (props) => {
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
        <div className={ classes.root }>
            <Header title={ props.match.params.user } icon={ <PersonIcon /> } />
            <Divider className={ classes.divider } />
            <TweetList data={ tweets }/>
        </div>
    )
};


export default TweetByUser;