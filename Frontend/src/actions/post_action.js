import { makeFetchRequest } from "../modules/makeFetch"

export const SET_TOKEN = "SET_TOKEN"

export const setToken = () => {
    const login = {
        "email": "test@user.com",
        "password": "password789"
    }
    const url = 'http://localhost:3001/api/v1/user/login'
    const curl = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    }
    return async (dispatch) => {
        return makeFetchRequest(url, curl).then((res) => {
            console.log(res.message,res.body.token)
            dispatch({ type: SET_TOKEN, payload: res.body.token })
        })
    }
}