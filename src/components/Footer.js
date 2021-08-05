
import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-timezone";

export default function Footer(props) {
  const currentYear = moment().get("year");
  const { t } = useTranslation();

  return (
    <div>
      <footer className="footer section py-3">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
