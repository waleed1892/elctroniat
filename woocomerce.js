import axios from "axios";

const woocomerce = axios.create({
    baseURL: 'https://elctroniat.com/wp-json/wc/v3/',
    auth: {
        username: 'ck_ff6f7d55b3f322564c0afe512b73f77041258952',
        password: 'cs_821280f87e3bdb57421708c744ed9cd473c55e9d'
    }
})

export default woocomerce