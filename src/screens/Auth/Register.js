import React from 'react';
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/images/illustrations/signin.svg";

export default function Register() {
    const { t } = useTranslation();

    return (
        <main>
            <h1>Register</h1>
        </main>
    )
}