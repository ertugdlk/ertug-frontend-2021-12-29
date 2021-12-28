import AxiosUtil from "../utils/axios"
import axios from "axios"
import { baseUrl } from "../config"

const axiosUtil = new AxiosUtil()

export default class SearchService {
    constructor() {
        this.path = baseUrl + "search/"
    }

    static async getResults(text, page) {
        try {
            const response = await axios.get(
                baseUrl + "search/" + text + "/page/" + page
            )
            const results = response.data.data
            return results
        } catch (e) {
            alert("Search Failed")
        }
    }
}
