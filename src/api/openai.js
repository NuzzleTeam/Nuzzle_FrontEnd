import axios from "axios";

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
  },
});

console.log("Axios instance:", openai); // Log to check configuration
export default openai;
