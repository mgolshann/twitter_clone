import axios from 'axios';

export const getAxiosInstance = () => {
    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            API_KEY: "541fs5f13s5d1fs5df15sd1f3s5df1ds"
        }
    });
}

export const getAxiosInstanceAuth = () => {
    return axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            API_KEY: "541fs5f13s5d1fs5df15sd1f3s5df1ds"
        }
    });
}

// those Api which are private should use this API
export const getAxiosInstanceApi = () => {
    return axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            "x-auth-token": localStorage.getItem("x-auth-token")
        }
    });
}