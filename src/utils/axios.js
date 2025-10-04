import axios from "axios";

const instance = axios.create({
    baseURL: "https://resume-score-ai-server.vercel.app/api",
});

export default instance;
