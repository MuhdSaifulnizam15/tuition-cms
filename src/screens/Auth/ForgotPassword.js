import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { Routes } from "routes";

export default function ForgotPassword() {
    const { t } = useTranslation();

    return (
        <main>
            <h1>ForgotPassword</h1>
        </main>
    )
}