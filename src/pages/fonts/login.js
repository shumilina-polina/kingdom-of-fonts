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
  DevicesImage,
  AccessForm,
  AccessFormField,
  AccessInput,
  AccessInputHelpText,
  AccessInputIcon,
  AccessFormControl,
  AccessInputIconButton,
} from "../../components/access-page/style";
import ArrowIcon from '../../assets/svgs/arrow-icon.svg';
import CheckIcon from '../../assets/svgs/check-icon.svg';
import CrossIcon from '../../assets/svgs/cross-icon.svg';
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

import { UserContext } from "../../context/UserContext";
import api, {getValidationErrors, hasErrorCode} from "../../api";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup
const RestoreAccessPage = ({ location }) => {
  const [email, setEmail] = useState(location.state?.autoLoginEmail || '')
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const validationErrors = getValidationErrors(error)
  const userNotFound = hasErrorCode(validationErrors.non_field_errors, "user_not_found")

  const autoLogin = !!location.state?.autoLoginEmail

  const logIn = () => {
    if (!email || isPending || isSuccess) return

    setIsPending(true)
    setError(null)

    api.post("/email-token/", {
      item: "fonts",
      email,
    })
      .then(() => {
        setIsSuccess(true)
      }, (error) => {
        setError(error)
      })
      .then(() => {
        setIsPending(false)
      })
  }

  useEffect(() => {
    if (autoLogin) {
      logIn()
    }
  }, [autoLogin])

  const title = "Войти на сайт"

  const text = (<>
    Восстань, пророк!<br/>
    И виждь, и внемли,<br/>
    Исполнись волею моей,<br/>
    И, обходя моря и земли,<br/>
    <span>Шрифтами жги сердца людей!</span>
  </>)

  const emailPlaceholder = "Введите вашу@почту"
  const emailHelpText = "Мы отправим на эту почту ссылку для входа на сайт"
  const emailHelpTextSuccess = "Cсылку для входа на сайт отправили, проверьте эту почту и спам :)"
  const emailHelpTextUserNotFound = (<>
    Мы не знаем такого емейла, перепроверьте плиз или&nbsp;
    <a href="https://t.me/katerinazuryan" target="_blank">напишите нам</a>
  </>)

  const emailErrorMessages = {
    invalid: "Не похоже на емейл, где-то ошибка, перепроверьте плиз",
  }
  const unknownErrorMessage = "У нас проблемы на сервере, подождите или напишите нам"

  const onEmailChange = (e) => {
    setIsSuccess(false)
    setError(null)
    setEmail(e.target.value)
  }

  const onLoginFormSubmit = (e) => {
    e.preventDefault()

    logIn()
  }

  const clearEmail = () => {
    setIsSuccess(false)
    setError(null)
    setEmail('')
  }

  const getForm = () => {
    if (!isSuccess && !error) {
      return (
        <AccessForm onSubmit={onLoginFormSubmit}>
          <AccessFormField>
            <AccessFormControl>
              <AccessInput
                // key="email-input-idle"
                spellCheck={false}
                placeholder={emailPlaceholder}
                value={email}
                onChange={onEmailChange}
                disabled={isPending}
                hasIconsRight
                autoFocus
              />
              <AccessInputIconButton right disabled={!email || isPending}>
                <ArrowIcon />
              </AccessInputIconButton>
            </AccessFormControl>
            <AccessInputHelpText disabled={!email}>
              {emailHelpText}
            </AccessInputHelpText>
          </AccessFormField>
        </AccessForm>
      )
    }

    if (isSuccess) {
      return (
        <AccessForm onSubmit={onLoginFormSubmit}>
          <AccessFormField>
            <AccessFormControl>
              <AccessInput
                // key="email-input-success"
                spellCheck={false}
                value={email}
                onChange={onEmailChange}
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
      )
    }

    if (error) {
      return (
        <AccessForm onSubmit={onLoginFormSubmit}>
          <AccessFormField>
            <AccessFormControl>
              <AccessInput
                // key="email-input-error"
                spellCheck={false}
                placeholder={emailPlaceholder}
                value={email}
                onChange={onEmailChange}
                disabled={isPending}
                danger={!!error}
                hasIconsRight
                autoFocus
              />
              <AccessInputIconButton type="button" right danger onClick={clearEmail}>
                <CrossIcon />
              </AccessInputIconButton>
            </AccessFormControl>
            {userNotFound && (
              <AccessInputHelpText danger>
                {emailHelpTextUserNotFound}
              </AccessInputHelpText>
            )}
            {validationErrors.email && validationErrors.email.map((e) =>
              <AccessInputHelpText key={e.code} danger>
                {emailErrorMessages[e.code] || e.message}
              </AccessInputHelpText>
            )}
            {!validationErrors.email && !userNotFound && (
              <AccessInputHelpText danger>
                {unknownErrorMessage}
              </AccessInputHelpText>
            )}
          </AccessFormField>
        </AccessForm>
      )
    }
  }

  return (
    <>
      <GlobalStyleOverflowed/>
      <Layout>
        <SEO noIndex />
        <AccessWrapper>
          <AccessImageThanks src={thanksImage} />
          <AccessInfo>
            <AccessTitle>{title}</AccessTitle>
            <AccessText>{text}</AccessText>
          </AccessInfo>
          <AccessFooter>
            {getForm()}
          </AccessFooter>
        </AccessWrapper>
      </Layout>
    </>
  );
};

export default RestoreAccessPage;

