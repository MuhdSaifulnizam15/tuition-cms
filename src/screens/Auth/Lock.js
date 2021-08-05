import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEye, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/images/illustrations/signin.svg";
import Profile3 from "assets/images/avatar/avatar-3.png";

export default function Lock() {
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputType = showPassword ? "text" : "password";
    const passwordIconColor = showPassword ? "#262B40" : "";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main>
            <h1>Lock</h1>
        </main>
    );
};