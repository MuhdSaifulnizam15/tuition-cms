
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartPie, faCog, faSignOutAlt, faTimes, faUsers, faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ReactHero from "../assets/images/logo/stisla.svg";
import ProfilePicture from "../assets/images/avatar/avatar-3.png";

export default function Sidebar(props = {}) {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  return (
    <>
      <h1>Sidebar</h1>
    </>
  );
};
