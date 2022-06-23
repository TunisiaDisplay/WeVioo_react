import axios from "axios";

export default axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
    headers: {
        'app-id': '627b956fb058dc4fa16fa1b9'
    }
});