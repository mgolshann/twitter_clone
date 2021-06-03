import { ButtonBase, Divider, Grid, Menu, MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uploadUserPhotoApi } from '../../api/api_auth';
import { getUsers } from '../../api/api_tweet';
import useStyle from './style';


const Tweet = ({ name, id, img }) => {
    const classes = useStyle();

    const getImage = () => {
        if (img) return img;
        return "/images/person.png";
    }

    return (
        <ButtonBase style={{ width: "100%" }}>
            <Grid item container direction={"row"} className={classes.tweeterParent}>
                <img src={getImage()} className={classes.tweeterImg} />
                <Grid item container direction={"column"} alignItems={"flex-start"} style={{ width: "max-content", marginRight: "0.5rem" }}>
                    <Typography className={classes.profName}>{name}</Typography>
                    <Typography className={classes.profId}>{id}</Typography>
                </Grid>
            </Grid></ButtonBase>
    );
};



const LeftSideBar = () => {

    const inputRef = useRef();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();

    const classes = useStyle();
    const [users, setUsers] = useState([]);
    const [anchorMenu, setAnchorMenu] = useState();

    const handleToggleMenu = (e) => {
        if (anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(e.currentTarget);
    };

    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return alert(data.message);
            setUsers(data)
        })
    }, []);

    const getImage = () => {
        if (imagePath) return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== "undefined")
            return localStorage.getItem("image");
        return "/images/person.png";
    };

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result)
            };
            reader.readAsDataURL(e.target.files[0]);

            const formData = new FormData();
            formData.append("image", e.target.files[0]);

            uploadUserPhotoApi(formData, (isOk, data) => {
                if (!isOk) return toast.error(data);
                toast.success("عکس شما با موفقیت ثبت شد")
                localStorage.setItem("image", data.imagePath);
            });
        }
    }

    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu}>
                <img src={getImage()} style={{ width: 50, height: 50, borderRadius: "50%" }} />
                <Grid item container direction={"column"} className={classes.profText} >
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <input ref={inputRef} type={"file"} style={{ display: "none" }} onChange={handleAvatarChange} />
            </Grid>

            <Grid item container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>بهترین خبرنگاران</Typography>
                <Divider style={{ marginRight: "-24px", marginLeft: "-24px" }} />
                {
                    users.map((item, index) => {
                        return (
                            <>
                                <Link to={`/users/${item._id}/${item.name}`} style={{ width: "100%" }}>
                                    <Tweet name={item.name} id={item.username} img={item.image} />
                                    {index !== users.length - 1 &&
                                        <Divider style={{ marginRight: "-24px", marginLeft: "-24px" }} />
                                    }
                                </Link>
                            </>
                        )
                    })
                }
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={() => {
                    inputRef.current.click();
                }}>ویرایش عکس پروفایل</MenuItem>
                <MenuItem onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                }}>خروج</MenuItem>
            </Menu>
        </div>
    )
};

export default LeftSideBar;