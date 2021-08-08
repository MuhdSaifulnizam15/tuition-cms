
import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-timezone";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const currentYear = moment().get("year");
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {t("copyright")}{' '}
        <a href="https://material-ui.com/">
          {t("tuitionName")}
        </a>{' '}
        {currentYear}
        {"."}
      </Typography>
    </div>
  );
};
