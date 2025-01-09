import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params:{
        key:"e3536941d3ce45aeba3db737c18e9dcc"
    }
})

export { CanceledError };