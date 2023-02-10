import React, { useState, useEffect } from "react";
import {
  AccessInfo,
  AccessText,
  AccessTitle,
  AccessWrapper,
  AccessFooter,
  AccessImageThanks,
  AccessForm,
  AccessFormField,
  AccessInput,
  AccessInputHelpText,
  AccessInputIcon,
  AccessFormControl,
  AccessInputIconButton,
  AccessBlurredLight,
} from "../../components/access-page/style";
import ArrowIcon from '../../assets/svgs/arrow-icon.svg';
import CheckIcon from '../../assets/svgs/check-icon.svg';
import CrossIcon from '../../assets/svgs/cross-icon.svg';
import Layout from "../../components/Layout";

import thanksImage from "../../assets/thanks.png";
import { Container, GlobalStyleOverflowed } from "../../global";
import SEO from "../../seo";

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
      product: "fonts",
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
    <a href="https://t.me/zuryaaan" target="_blank">напишите нам</a>
  </>)

  const emailErrorMessages = {
    invalid: "Не похоже на емейл, где-то ошибка, перепроверьте плиз",
  }
  const unknownErrorMessage = (<>
    У нас проблемы на сервере, подождите или&nbsp;
    <a href="https://t.me/zuryaaan" target="_blank">напишите нам</a>
  </>)

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
        <Container>
          <AccessWrapper>
            <AccessImageThanks src={thanksImage} />
            <AccessInfo>
              <AccessTitle>{title}</AccessTitle>
              <AccessText>{text}</AccessText>
            </AccessInfo>
            <AccessFooter>
              {getForm()}
            </AccessFooter>
            <AccessBlurredLight />
          </AccessWrapper>
        </Container>
      </Layout>
    </>
  );
};

export default RestoreAccessPage;

