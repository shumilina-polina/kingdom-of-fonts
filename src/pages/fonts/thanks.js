import React from "react";
import { useQueryParam, StringParam } from "use-query-params";
import {
  AccessInfo,
  AccessText,
  AccessTitle,
  AccessWrapper,
  AccessFooter,
  AccessImageThanks,
  AccessForm,
  AccessFormField,
  AccessFormControl,
  AccessInput,
  AccessInputIcon,
  AccessInputHelpText,
} from "../../components/access-page/style";
import Layout from "../../components/Layout";

import thanksImage from "../../assets/thanks.png";
import { Container, GlobalStyleOverflowed } from "../../global";
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
        <Container>
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
        </Container>
      </Layout>
    </>
  );
};

export default ThanksPage;
