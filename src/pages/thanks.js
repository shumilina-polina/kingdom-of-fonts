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
  AccessImageMobileThanksWrapper,
  AccessImageMobileThanks,
  AccessInfoOverlay,
  AccessInfoWrapper,
  AccessButtonStepTwo,
  AccessImageThanksMobile,
  AccessImageThanksLight,
  DevicesImage,
} from "../components/access-page/style";
import ArrowIcon from '../assets/svgs/arrow-icon.svg'; 
import YouMoneyLogo from '../assets/svgs/youmoney.svg'; 
import YouMoneyMobileLogo from '../assets/svgs/money_mobile.svg';
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";

// import buyImage from "../assets/buy.png";
// import buyImageMobile from "../assets/buy_mobile.png";
import thanksImage from "../assets/thanks.png";
import thanksImageMobile from "../assets/thanks_mobile.png"
import thanksImageLightMobile from "../assets/thanks_green-light.png";
import devicesImage from "../assets/devices.png";
import moneyImageMobile from "../assets/money_mobile.png";
import { Container, GlobalStyle, GlobalStyleOverflowed } from "../global";
import SEO from "../seo";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup
const ThanksPage = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kingdomOfFontsAccess", "true");
    }
  }, []);

  const title = "Всё прошло супер!";
  const text = (<>Вы оплатили доступ к&nbsp;библиотеке, за&nbsp;что&nbsp;вам огромное спасибо!<span> Теперь&nbsp;у&nbsp;вас есть клёвые шрифты</span> для&nbsp;проектов, а&nbsp;у&nbsp;нас вдохновение и&nbsp;энергия для поиска&nbsp;новых :3</>)
  const buttonText = "К шрифтам"

  return (
<><GlobalStyleOverflowed/>
    <Layout>
      <SEO noIndex/>
      
        <Container>
            <DesktopWrapper>
              <AccessWrapper>
                <AccessImageThanks src={thanksImage} />
                <AccessInfo>
                  <AccessTitle>{title}</AccessTitle>
                  <AccessText>{text}</AccessText>
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
            <AccessWrapper wrapperHeight="167vw">
              <AccessImageMobileThanksWrapper>
                <AccessImageMobileThanks src={thanksImageMobile} />
                <AccessImageThanksLight src={thanksImageLightMobile} />
              </AccessImageMobileThanksWrapper>
              <AccessInfoWrapper>
                <AccessInfo>
                  <AccessTitle fontSize="7.4vw">{title}</AccessTitle>
                  <AccessText marginBottom="7vw">{text}</AccessText>
                </AccessInfo>
                <AccessFooter>
                  <AccessThanksButton to="/myfonts">
                    {buttonText}
                  </AccessThanksButton>
                </AccessFooter>
              </AccessInfoWrapper>
                
              </AccessWrapper>
            </MobileWrapper>
        </Container>
    </Layout>
    </>
  );
};

export default ThanksPage;
