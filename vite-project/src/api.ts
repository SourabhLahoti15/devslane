import axios from "axios"

const data = axios.get("https://randomuser.me/api?results=5").then(
    (response) => response.data.results
)

export default data;