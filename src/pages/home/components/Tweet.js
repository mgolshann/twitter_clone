import { Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { setTweetText, useTweetDispatch, likeTweet } from '../../../context/TweetContext';
import { likeTweetRequest } from '../../../api/api_tweet';
import { toast } from 'react-toastify';

const renderTweet = (text) => {
    return { __html: text.replace(/#\S+/g, "<a href='/tags/' style='color: cornFlowerBlue'>$&</a>") };
};

const Tweet = ({ data }) => {

    const classes = useStyle();
    const tweetDispatch = useTweetDispatch();

    const handleLike = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if (!isOk) 
                return toast.error(data);
            likeTweet(tweetDispatch, data._id);
        });
    }

    const getImage = () => {
        if (data.user.image) return data.user.image;
        return '/images/person.png';
    }

    const retweetClick = () => {
        setTweetText(tweetDispatch, data.text);
    }

    //if (data.user.name !== "محمد") { return (<></>); }

    return (<div className={classes.tweetItem}>
        <Grid container>
            <img src={getImage()} style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
            <Grid item container direction={"column"} style={{ flex: 1 }}>
                <Grid item container>
                    <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                    <Typography className={classes.tweetItemId}>{data.user.id}</Typography>
                </Grid>
                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.textTweet} component={"p"}></Typography>
                {
                    data.image &&
                    <div>
                        <div style={{ backgroundImage: `url(${data.image})` }} className={classes.tweetImgShow}></div>
                    </div>
                }
            </Grid>
        </Grid>
        <Grid container direction={"row-reverse"} alignItems={"center"}>
            <IconButton className={classes.newTweetImg} onClick={retweetClick}>
                <img src={"/images/retweet.png"} />
            </IconButton>
            <IconButton className={classes.newTweetImg} onClick={handleLike}>
                <FavoriteIcon />
            </IconButton>
            <Typography className={classes.likeCount}>{data.likes}</Typography>
        </Grid>
    </div>)
};

export default Tweet;