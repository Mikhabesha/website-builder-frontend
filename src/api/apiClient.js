import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://localhost:44385/api", // Replace with your API's base URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
