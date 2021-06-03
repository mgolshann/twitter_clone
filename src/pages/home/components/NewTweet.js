import React, { useState } from 'react';
import useStyle from '../styles';
import { Button, Grid, IconButton } from '@material-ui/core';
import Axios from 'axios';
import { newTweetRequest } from '../../../api/api_tweet';
import classnames from 'classnames';
import { toast } from 'react-toastify';
import { FilterCenterFocusSharp } from '@material-ui/icons';
import { useTweetDispatch, useTweetState, updateHashTagsList } from '../../../context/TweetContext';
import {setTweetText as setTweet} from '../../../context/TweetContext'

const NewTweet = ({ updateTweets }) => {

    const classes = useStyle();
    const input = React.useRef();
    const inputFile = React.useRef();
    //const [tweet, setTweet] = useState();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();


    const { tweetText: tweet } = useTweetState();
    const tweetDispatch = new useTweetDispatch();


    const getImage = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== "undefined")
            return localStorage.getItem("image");
        return "/images/person.png";
    };

    const onChangeImg = (e) => {
        if (e.target.files && e.target.files.length > 0)
            setImageFile(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = (e) => {
            setImagePath(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    const selectImg = () => {
        inputFile.current.click();
    };

    const newTweetClick = () => {
        // const tweetText = input.current.innerText;
        const tweetText = tweet;
        if (!tweetText) return;

        const formData = new FormData();
        formData.append("text", tweetText);
        formData.append("image", imageFile);

        newTweetRequest(formData, (isOk) => {
            if (!isOk) return toast.error("ارسال نشد");
            toast.success("با موفقیت ارسال شد");
            updateTweets();
            setTweet(tweetDispatch, "");
            setImageFile();
            setImagePath();
            
            updateHashTagsList(tweetDispatch);

        })
    };

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} style={{ width: 60, height: 60, borderRadius: "50%" }} />
                {/* <div contentEditable className={classnames(classes.input, "editable")} placeholder={"توییت جدید"}
                    data-placeholder={"توییت کن ..."}
                    ref={input}></div> */}
                <input placeholder={"توییت جدید"} className={classnames(classes.input, "editable")}
                    value={tweet} onChange={e => setTweet(tweetDispatch, e.target.value)}
                />
                <input type={'file'} style={{ display: "none" }} ref={inputFile} onChange={onChangeImg} />
            </Grid>
            {
                imagePath &&
                <div>
                    <div style={{ backgroundImage: `url(${imagePath})` }} className={classes.tweetImg}></div>
                </div>
            }
            <Grid container direction={"row-reverse"}>
                <Button onClick={newTweetClick} className={classes.newTweetBtn} variant={"contained"} color={"primary"}>توییت</Button>
                <IconButton className={classes.newTweetImg} onClick={selectImg}>
                    <img src={"/images/tweetpic.png"} />
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;