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
  CurveMobileIcon,
  ShadowCircle,
  DesktopWrapper,
  MobileWrapper,
  AccessImageWrapper,
  AccessImageStepOne,
  AccessImageThanks,
  AccessThanksButton,
  AccessImageStepTwoWrapper,
  AccessButtonStepTwo,
  DevicesImage,
} from "../components/access-page/style";
import ArrowIcon from '../assets/svgs/arrow-icon.svg'; 
import YouMoneyLogo from '../assets/svgs/youmoney.svg'; 
import YouMoneyMobileLogo from '../assets/svgs/money_mobile.svg';
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";

import buyImage from "../assets/buy.png";
import buyImageMobile from "../assets/buy_mobile.png";
import thanksImage from "../assets/thanks.png";
import devicesImage from "../assets/devices.png";
import { Container } from "../global";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup
const RestoreAccessPage = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);

  const title = "Доступ к шрифтам";
  
  const text = (<>Восстань, пророк! И&nbsp;виждь, И&nbsp;внемли, исполнись волею моей, И,&nbsp;обходя моря и&nbsp;земли <span>Шрифтами&nbsp;жги сердца людей!</span></>)
  const buttonText = "К шрифтам"

  return (
    <Layout>
      <Container>
          <DesktopWrapper>
            <AccessWrapper>
              <AccessImageThanks src={thanksImage} />
              <AccessInfo >
                <AccessTitle style={{marginBottom: "15px"}}>{title}</AccessTitle>
                <AccessText >{text}</AccessText>
              </AccessInfo>
              <AccessLine/>
              <AccessFooter>
              <AccessThanksButton to="/myfonts">
                {buttonText}
              </AccessThanksButton>
                <ArrowIcon/>
                <DevicesImage src={devicesImage} />
              </AccessFooter>
            </AccessWrapper>
          </DesktopWrapper>
          <MobileWrapper >
          <AccessWrapper>
            <AccessImageStepTwoWrapper>
            {/* <AccessImageStepTwo src={moneyImageMobile} /> */}
            </AccessImageStepTwoWrapper>
              <AccessInfo>
                <AccessTitle>{title}</AccessTitle>
                <AccessText>{text}</AccessText>
              </AccessInfo>
              <AccessFooter>
                <AccessThanksButton>
                  {buttonText}ds
                </AccessThanksButton>
              </AccessFooter>
            </AccessWrapper>
          </MobileWrapper>
      </Container>
    </Layout>
  );
};

export default RestoreAccessPage;
