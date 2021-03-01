import axios from "axios";

const woocomerce = axios.create({
    baseURL: 'https://elctroniat.com/wp-json/wc/v3/'
})

export default woocomerce