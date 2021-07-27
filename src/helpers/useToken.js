import { useState } from 'react';

export default function useToken() {
    const getToken = (type = "access") => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        if(type === "access"){
            return userToken?.access.token;
        } else {
            return userToken?.refresh.token;
        }
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.access.token);
    };

    return {
        setToken: saveToken,
        getToken: getToken,
        token
    }
}