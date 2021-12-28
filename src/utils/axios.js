import axios from "axios"

export default class AxiosUtil {
    async getRequest(url) {
        const response = await axios.get(url, { withCredentials: "true" })
        if (response.data.data) {
            return response.data.data
        } else {
            return []
        }
    }
}
