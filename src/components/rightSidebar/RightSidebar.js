import React, { useEffect, useState } from 'react';
import Typograpghy from '@material-ui/core/Typography'
import useStyle from './styles';
import { ButtonBase, Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { getHashTags } from '../../api/api_tweet';
import { useTweetDispatch, useTweetState, setHashTagsList } from '../../context/TweetContext';


const RightSidebar = () => {
    const classes = useStyle();
    //const [hashTags, setHashTags] = useState([]);

    const location = useLocation();
    const {hashTagsList: hashTags} = useTweetState();
    const hashTagsDispatch = useTweetDispatch();

    useEffect(() => {
        getHashTags((isOk, data) => {
            if (!isOk) 
                return alert(data.message);
            setHashTagsList(hashTagsDispatch, data)
        })
    }, [location]);

    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <img src={"/images/logo.png"} />
                    <Typograpghy className={classes.logoType}>
                        توییتر میراث فرهنگی
                </Typograpghy>
                </Grid>
            </Link>

            <Typograpghy className={classes.hashTagTitle}>
                داغ ترین هشتگ ها
            </Typograpghy>

            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.map(item => <ButtonBase className={classes.hashtagParent}>
                        <Link to={"/hashtags/" + item.text} style={{ width: "100%" }}>
                            <Grid item container>
                                <img src={"/images/hashtag.png"} />
                                <Typograpghy className={classes.hashtag}>
                                    {item.text}
                                </Typograpghy>
                            </Grid>
                        </Link>
                    </ButtonBase>)
                }
            </Grid>


        </div>
    );
};

export default RightSidebar;