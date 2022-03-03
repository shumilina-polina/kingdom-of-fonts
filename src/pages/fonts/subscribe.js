import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, navigate } from "gatsby";
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
  AccessForm,
  AccessInput,
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
  AccessImageStepTwo,
  AccessImageStepTwoWrapper,
  AccessButtonStepTwo,
  AccessImageMobileThanksWrapper,
  AccessImageMobileEnvelope,
  AccessImageEnvelopeLight,
  AccessThanksButton,
  AccessInfoWrapper, AccessFormField, AccessInputHelpText, AccessButtonPrimaryLink
} from "../../components/access-page/style";
import ArrowIcon from '../../assets/svgs/arrow-icon.svg';
import YouMoneyLogo from '../../assets/svgs/youmoney.svg';
import YouMoneyMobileLogo from '../../assets/svgs/money_mobile.svg';
import Layout from "../../components/Layout";
import Logo from "../../components/logo/Logo";

import buyImage from "../../assets/buy.png";
import buyImageMobile from "../../assets/envelope_mobile.png";
import moneyImage from "../../assets/money.png";
import moneyImageMobile from "../../assets/money_mobile.png";
import { Container, GlobalStyle, GlobalStyleOverflowed } from "../../global";
import envelopeImageMobile from "../../assets/envelope_mobile.png"
import envelopeImageLightMobile from "../../assets/envelope_green-light.png";
import SEO from "../../seo";

import { UserContext } from "../../context/UserContext";
import api, {getValidationErrors, hasErrorCode} from "../../api";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup

const PayForm = ({ order, email, children }) => (
  <AccessForm method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
    <input type="hidden" name="receiver" value="410016040384130" />
    <input type="hidden" name="quickpay-form" value="donate" />
    <input type="hidden" name="targets" value="Бесплатная кириллица" />
    <input type="hidden" name="label" value={order.id} data-type="number" />
    <input type="hidden" name="sum" value={order.price} data-type="number" />
    <input
      type="hidden"
      name="comment"
      value={email}
    />
    <input type="hidden" name="need-fio" value="false" />
    <input type="hidden" name="need-email" value="false" />
    <input type="hidden" name="need-phone" value="false" />
    <input type="hidden" name="need-address" value="false" />
    <input
      type="hidden"
      name="successURL"
      value={`https://pavlushin.design/fonts/thanks?email=${email}`}
    />
    {children}
  </AccessForm>
)

const BuyPage = () => {
  const [email, setEmail] = useState('')
  const [isPending, setIsPending] = useState(false)
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(null)

  const validationErrors = getValidationErrors(error)
  const userExists = hasErrorCode(validationErrors.non_field_errors, "user_exists")

  const stepOneTitle = "Подписка на год";
  const stepOneText = (<><span>Вы покупаете доступ к сайту</span>, где мы собрали кучу шрифтов с&nbsp;бесплатной лицензией. Сами шрифты и лицензию на&nbsp;них мы не&nbsp;продаём, просто показываем, права на&nbsp;шрифты принадлежат авторам.¶</>)
  const stepOneEmailPlaceholder = "Введите вашу@почту"
  const stepOneEmailHelpText = "Мы создадим аккаунт с этим адресом для входа на сайт"
  const stepOneButtonText = "Подтвердить"
  const stepOneFirstYearTitle = (<>Первый год <span>1990</span></>)
  const stepOneFirstYearPrice = (<>990<span>₽</span></>)
  const stepOneSecondYearTitle = (<>Со второго года</>)
  const stepOneSecondYearPrice = (<>190<span>₽/мес</span></>)

  const stepTwoEmailHelpText = "Аккаунт создали, осталось оплатить подписку"
  const stepTwoButtonText = "Оплатить"

  const userExistsEmailHelpText = "Такой аккаунт уже есть, введите новую почту или входите"
  const userExistsButtonText = "Войти"

  const emailErrorMessages = {
    invalid: "Не похоже на емейл, где-то ошибка, перепроверьте плиз",
  }
  const unknownErrorMessage = "У нас проблемы на сервере, подождите или напишите нам"

  const onEmailChange = (e) => {
    setOrder(null)
    setError(null)
    setEmail(e.target.value)
  }

  const onEmailFormSubmit = (e) => {
    e.preventDefault()

    if (isPending) return

    setOrder(null)
    setError(null)
    setIsPending(true)

    api.post("/create-order/", {
      item: "fonts",
      email,
    })
      .then((response) => {
        setOrder(response.data)
      }, (error) => {
        setError(error)
      })
      .then(() => {
        setIsPending(false)
      })
  }

  const onLoginFormSubmit = (e) => {
    e.preventDefault()

    navigate("/fonts/login/", {state: { autoLoginEmail: email }})
  }

  const getForm = () => {
    if (!order && !userExists) {
      return (
        <AccessForm onSubmit={onEmailFormSubmit}>
          <AccessFormField>
            <AccessInput
              spellCheck={false}
              placeholder={stepOneEmailPlaceholder}
              value={email}
              onChange={onEmailChange}
              disabled={isPending}
              danger={!!validationErrors.email}
              autoFocus
            />
            {!error && (
              <AccessInputHelpText disabled={!email}>
                {stepOneEmailHelpText}
              </AccessInputHelpText>
            )}
            {error && validationErrors.email && validationErrors.email.map((e) =>
              <AccessInputHelpText key={e.code} danger>
                {emailErrorMessages[e.code] || e.message}
              </AccessInputHelpText>
            )}
            {error && !validationErrors.email && (
              <AccessInputHelpText danger>
                {unknownErrorMessage}
              </AccessInputHelpText>
            )}
          </AccessFormField>
          <AccessButton disabled={!email || isPending}>
            {stepOneButtonText}
          </AccessButton>
        </AccessForm>
      )
    }

    if (!order && userExists) {
      return (
        <AccessForm onSubmit={onLoginFormSubmit}>
          <AccessFormField>
            <AccessInput
              spellCheck={false}
              value={email}
              onChange={onEmailChange}
              danger
            />
            <AccessInputHelpText danger>
              {userExistsEmailHelpText}
            </AccessInputHelpText>
          </AccessFormField>
          <AccessButton>
            {userExistsButtonText}
          </AccessButton>
        </AccessForm>
      )
    }

    if (order) {
      return (
        <PayForm order={order} email={email}>
          <AccessFormField>
            <AccessInput
              spellCheck={false}
              value={email}
              onChange={onEmailChange}
              success
            />
            <AccessInputHelpText success>
              {stepTwoEmailHelpText}
            </AccessInputHelpText>
          </AccessFormField>
          <AccessButtonStepTwo>
            {stepTwoButtonText}
          </AccessButtonStepTwo>
        </PayForm>
      )
    }
  }

  return (
    <>
      <SEO />
      <GlobalStyleOverflowed/>
      <Layout>
        <Container>
          <AccessWrapper>
            <AccessInfo>
              <AccessImageStepOne src={buyImage} />
              <AccessTitle>{stepOneTitle}</AccessTitle>
              <AccessText>{stepOneText}</AccessText>
            </AccessInfo>
            <AccessFooter>
              {getForm()}
              <AccessPriceWrapper>
                <AccessPriceYear>
                  <AccessPrice green>
                    {stepOneFirstYearPrice}
                  </AccessPrice>
                  <AccessPriceTitle>
                    {stepOneFirstYearTitle}
                  </AccessPriceTitle>
                </AccessPriceYear>
                <AccessPriceYear>
                  <AccessPrice>
                    {stepOneSecondYearPrice}
                  </AccessPrice>
                  <AccessPriceTitle>
                    {stepOneSecondYearTitle}
                  </AccessPriceTitle>
                </AccessPriceYear>
              </AccessPriceWrapper>
            </AccessFooter>
          </AccessWrapper>
        </Container>
      </Layout>
    </>
  );
};

export default BuyPage;
