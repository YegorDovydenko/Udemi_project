import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-d624c-default-rtdb.europe-west1.firebasedatabase.app/'
})