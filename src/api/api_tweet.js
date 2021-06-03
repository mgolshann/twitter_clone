import { getAxiosInstance, getAxiosInstanceApi } from "./api";

export const getAllTweets = (callback) => {
    
    getAxiosInstanceApi().post("getAllTweet")
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log("1221");
            console.log(error);
            callback(false, error)
        });
}

export const getHashTags = (callback) => {
    getAxiosInstanceApi().get("getAllHashTags")
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

export const getUsers = (callback) => {
    getAxiosInstanceApi().get("getAllUser")
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceApi().post("newTweet", data)
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

export const getTweetByHashTagsRequest = (hashTag, callback) => {
    getAxiosInstanceApi().post("getAllTweet", {hashTag})
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

export const getTweetByUserRequest = (user, callback) => {
    getAxiosInstanceApi().post("getAllTweet", {user})
        .then(response => {
            callback(true, response.data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

export const likeTweetRequest = (id, callback) => {
    getAxiosInstanceApi().get("likeTweet/" + id)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            console.log(error);
            callback(false, error)
        });
}

