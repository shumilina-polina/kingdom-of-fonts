import React, { useState, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
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
  LogoWrapper,
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
  DevicesImage, AccessForm, AccessFormField, AccessFormControl, AccessInput, AccessInputIcon, AccessInputHelpText,
} from "../../components/access-page/style";
import ArrowIcon from '../../assets/svgs/arrow-icon.svg';
import YouMoneyLogo from '../../assets/svgs/youmoney.svg';
import YouMoneyMobileLogo from '../../assets/svgs/money_mobile.svg';
import Layout from "../../components/Layout";
import Logo from "../../components/logo/Logo";

// import buyImage from "../../assets/buy.png";
// import buyImageMobile from "../../assets/buy_mobile.png";
import thanksImage from "../../assets/thanks.png";
import thanksImageMobile from "../../assets/thanks_mobile.png"
import thanksImageLightMobile from "../../assets/thanks_green-light.png";
import devicesImage from "../../assets/devices.png";
import moneyImageMobile from "../../assets/money_mobile.png";
import { Container, GlobalStyle, GlobalStyleOverflowed } from "../../global";
import SEO from "../../seo";
import CheckIcon from "../../assets/svgs/check-icon.svg";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup
const ThanksPage = () => {
  const [email] = useQueryParam("email", StringParam)

  const title = "Всё прошло супер!";
  const text = (<>
    Вы оплатили доступ к&nbsp;библиотеке, за&nbsp;что&nbsp;вам огромное спасибо!<br/>
    <span> Теперь&nbsp;у&nbsp;вас есть клёвые шрифты</span> для&nbsp;проектов, а&nbsp;у&nbsp;нас вдохновение и&nbsp;энергия для поиска&nbsp;новых&nbsp;:3
  </>)
  const emailHelpTextSuccess = "Cсылку для входа на сайт отправили, проверьте эту почту и спам :)"

  const onFormSubmitNoop = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <GlobalStyleOverflowed/>
      <Layout>
        <SEO noIndex/>
        <AccessWrapper>
          <AccessImageThanks src={thanksImage} />
          <AccessInfo>
            <AccessTitle>{title}</AccessTitle>
            <AccessText>{text}</AccessText>
          </AccessInfo>
          {email && (
            <AccessFooter>
              <AccessForm onSubmit={onFormSubmitNoop}>
                <AccessFormField>
                  <AccessFormControl>
                    <AccessInput
                      value={email}
                      disabled
                      success
                      hasIconsRight
                    />
                    <AccessInputIcon right success>
                      <CheckIcon />
                    </AccessInputIcon>
                  </AccessFormControl>
                  <AccessInputHelpText success>
                    {emailHelpTextSuccess}
                  </AccessInputHelpText>
                </AccessFormField>
              </AccessForm>
            </AccessFooter>
          )}
        </AccessWrapper>
      </Layout>
    </>
  );
};

export default ThanksPage;
