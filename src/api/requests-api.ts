import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
})

// api
export const tasksAPI = {
    changeCheckbox(success: boolean) {
        return instance.post(`auth/test`, {success: success})
    }
}
// types
