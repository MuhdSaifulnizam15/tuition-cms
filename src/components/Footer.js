
import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-timezone";
import { Row, Col, Card } from '@themesberg/react-bootstrap';

export default function Footer(props) {
  const currentYear = moment().get("year");
  const { t } = useTranslation();

  return (
    <div>
      <footer className="footer section py-3">
        <Row>
          <Col xs={12} lg={6}>
            <p className="mb-0 text-center text-xl-left">
            {t("copyright")} © {`${currentYear} `}
              <Card.Link href="https://quizzy.com" target="_blank" className="text-blue text-decoration-none fw-normal">
                {t("quizzy")}
            </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
