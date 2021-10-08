import React, { useState, useEffect } from "react";
import {
  AccessInfo,
  AccessLine,
  AccessText,
  AccessTitle,
  AccessWrapper,
  AccessFooter,
  AccessButton,
  YouMoneyWrapper,
  YouMoneyText,
  AccessPriceWrapper,
  AccessPriceYear,
  AccessPriceTitle,
  AccessPrice,
  AccessImage,
  LogoWithCurve,
  CurveIcon,
  ShadowCircle,
} from "../components/access-page/style";
import ArrowIcon from '../assets/svgs/arrow-icon.svg'; 
import YouMoneyLogo from '../assets/svgs/youmoney.svg'; 
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";

import buyImage from "../assets/buy.png";
import { Container } from "../global";
import { navigate } from "gatsby-link";

// markup
const ThanksPage = () => {
  // const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);

  return (
    <Layout>
      <CurveIcon/>
      <LogoWithCurve>
        <Logo />
        <ShadowCircle/>
      </LogoWithCurve>
      <Container>
        <AccessWrapper>
          <AccessImage src={buyImage} />
          <AccessInfo>
            <AccessTitle>Всё прошло супер!</AccessTitle>
            <AccessText>Вы оплатили доступ к подборке, за что вам огромное спасибо! <span>Теперь у вас есть клёвые шрифты</span> для проектов, а у нас вдохновение и энергия для поиска и работы!</AccessText>
          </AccessInfo>
          <AccessLine/>
          <AccessFooter>
            <AccessButton onClick={() => navigate("/myfonts")}>
              К шрифтам
            </AccessButton>
            <ArrowIcon/>
          </AccessFooter>
        </AccessWrapper>
      </Container>
    </Layout>
  );
};

export default ThanksPage;

