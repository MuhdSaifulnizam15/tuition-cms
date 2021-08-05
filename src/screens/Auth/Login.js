import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import { useHistory, Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import { Routes } from "routes";
import BgImage from "assets/images/illustrations/signin.svg";
import endpoint from 'apis/endpoint';
import RequestCall from 'helpers/requestCall';

async function loginUser(credentials) {
    // return fetch('http://localhost:3001/v1/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())

    const response = RequestCall(endpoint.login, 'POST', credentials);
    console.log('response:login', response);

    const data = response.data;
    console.log("data:login", data);

    return data;
}

export default function Login({ setToken }) {
    const { t } = useTranslation();
    const history = useHistory();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });

        if(token.tokens){
            setToken(token.tokens);
            history.push(Routes.Dashboard.path);
        }
    }

    return (
        <main>
            <h1>Login</h1>
        </main>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}