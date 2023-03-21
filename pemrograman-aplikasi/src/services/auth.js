import Cookies from 'js-cookie'

export const setAuthToken = (token) => {
    if (token) {
        Cookies.set('token', token)
    }
}

export const getAuthToken = () => {
    return Cookies.get('token')
}

export const removeAuthToken = () => {
    Cookies.remove('token')
}
