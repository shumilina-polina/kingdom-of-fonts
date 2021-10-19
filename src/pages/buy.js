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
  AccessImageStepTwo,
  AccessImageStepTwoWrapper,
  AccessButtonStepTwo,
  AccessImageMobileThanksWrapper,
  AccessImageMobileEnvelope,
  AccessImageEnvelopeLight,
  AccessThanksButton,
  AccessInfoWrapper
} from "../components/access-page/style";
import ArrowIcon from '../assets/svgs/arrow-icon.svg'; 
import YouMoneyLogo from '../assets/svgs/youmoney.svg'; 
import YouMoneyMobileLogo from '../assets/svgs/money_mobile.svg';
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";

import buyImage from "../assets/buy.png";
import buyImageMobile from "../assets/envelope_mobile.png";
import moneyImage from "../assets/money.png";
import moneyImageMobile from "../assets/money_mobile.png";
import { Container } from "../global";
import envelopeImageMobile from "../assets/envelope_mobile.png"
import envelopeImageLightMobile from "../assets/envelope_green-light.png";
import SEO from "../seo";

// const Title = ({children}) => <AccessTitle>{children}</AccessTitle>
// markup
const BuyPage = () => {
  const [warning, setWarning] = useState(false)

  const stepOneTitle = "Подписка на год";
  const stepOneText = (<>Нажимая кнопку, <span>вы покупаете доступ к&nbsp;сайту</span> с&nbsp;библиотекой клёвых бесплатных шрифтов, собранных по&nbsp;всем интернетам и&nbsp;соглашаетесь с&nbsp;тем, что вы прекрасны&nbsp;:*</>)
  const stepOneButtonText = "Подписаться"
  const stepOneFirstYearTitle = (<>Первый год <span>1990</span></>)
  const stepOneFirstYearPrice = (<>990<span>₽</span></>)
  const stepOneSecondYearTitle = (<>Со второго года</>)
  const stepOneSecondYearPrice = (<>190<span>₽/мес</span></>)

  const stepTwoTitle = "Один нюанс";
  const stepTwoText = (<>После успешной оплаты на&nbsp;Юмани появится окно с&nbsp;подтверждением и&nbsp;кнопкой <span>вернуться на&nbsp;сайт</span>, на&nbsp;эту <span>кнопку</span> нужно <span>нажать</span>, чтобы  вернуться к&nbsp;нам сюда за&nbsp;шрифтами</>)
  const stepTwoForm = (
    <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
      <input type="hidden" name="receiver" value="410016040384130" />
      <input type="hidden" name="quickpay-form" value="donate" />
      <input type="hidden" name="targets" value="Бесплатная кириллица" />
      <input type="hidden" name="sum" value="990" data-type="number" />
      <input
        type="hidden"
        name="comment"
        value="Хочу получить доступ к библиотеке шрифтов"
      />
      <input type="hidden" name="need-fio" value="false" />
      <input type="hidden" name="need-email" value="true" />
      <input type="hidden" name="need-phone" value="false" />
      <input type="hidden" name="need-address" value="false" />
      <input
        type="hidden"
        name="successURL"
        value="https://pavlushin.design/thanks"
      />
      <AccessButtonStepTwo type="submit" value="Оплатить">Оплатить</AccessButtonStepTwo>
    </form>
  )
  const youMoneyText = "Перейти к оплате на Юмани"
  const youMoneyTextMobile = "Перейти к оплате на сайт Юмани"
  return (
    <>
    <SEO />
    <Layout>
      <Container>
        {warning ? (
          <>
          <DesktopWrapper>
            <AccessWrapper>
              <AccessImageStepTwo src={moneyImage} />
              <AccessInfo>
                <AccessTitle>{stepTwoTitle}</AccessTitle>
                <AccessText>{stepTwoText}</AccessText>
              </AccessInfo>
              <AccessLine/>
              <AccessFooter>
                {stepTwoForm}
                <ArrowIcon/>
                <YouMoneyWrapper>
                  <YouMoneyLogo/>
                  <YouMoneyText>
                    {youMoneyText}
                  </YouMoneyText>
                </YouMoneyWrapper>
                <ArrowIcon/>
              </AccessFooter>
            </AccessWrapper>
          </DesktopWrapper>
          <MobileWrapper >
          <AccessWrapper>
            <AccessInfo>
                <AccessTitle>{stepTwoTitle}</AccessTitle>
                <AccessText>{stepTwoText}</AccessText>
              </AccessInfo>
            <AccessImageStepTwoWrapper>
              <AccessImageStepTwo src={moneyImageMobile} />
            </AccessImageStepTwoWrapper>
              <YouMoneyWrapper>
                  <YouMoneyLogo/>
                  <YouMoneyText>
                    {youMoneyTextMobile}
                  </YouMoneyText>
                </YouMoneyWrapper>
              <AccessFooter>
                {stepTwoForm}

              </AccessFooter>
            </AccessWrapper>
          </MobileWrapper>
          </>
        ) : (
          <>
          <DesktopWrapper>
          <AccessWrapper>
            <AccessImageStepOne src={buyImage} />
            <AccessInfo>
              <AccessTitle>{stepOneTitle}</AccessTitle>
              <AccessText>{stepOneText}</AccessText>
            </AccessInfo>
            <AccessLine/>
            <AccessFooter>
              <AccessButton onClick={() => setWarning(true)}>
                {stepOneButtonText}
              </AccessButton>
              <ArrowIcon/>
              <AccessPriceWrapper>
                <AccessPriceYear>
                  <AccessPriceTitle>
                    {stepOneFirstYearTitle}
                  </AccessPriceTitle>
                  <AccessPrice green>
                    {stepOneFirstYearPrice}
                  </AccessPrice>
                </AccessPriceYear>
                <AccessPriceYear>
                <AccessPriceTitle>
                    {stepOneSecondYearTitle}
                  </AccessPriceTitle>
                  <AccessPrice>
                    {stepOneSecondYearPrice}
                  </AccessPrice>
                </AccessPriceYear>
              </AccessPriceWrapper>
            </AccessFooter>
          </AccessWrapper>
          </DesktopWrapper>
          <MobileWrapper>
          <AccessWrapper wrapperHeight="169vw">
              <AccessImageMobileThanksWrapper>
                <AccessImageMobileEnvelope src={envelopeImageMobile} />
                <AccessImageEnvelopeLight src={envelopeImageLightMobile} />
              </AccessImageMobileThanksWrapper>
              <AccessInfoWrapper>
                <AccessInfo>
                  <AccessTitle fontSize="8.1vw">{stepOneTitle}</AccessTitle>
                </AccessInfo>
                <AccessFooter>
              <AccessPriceWrapper>
                <AccessPriceYear>
                  <AccessPriceTitle>
                    {stepOneFirstYearTitle}
                  </AccessPriceTitle>
                  <AccessPrice green>
                    {stepOneFirstYearPrice}
                  </AccessPrice>
                </AccessPriceYear>
                <ArrowIcon/>
                <AccessPriceYear>
                <AccessPriceTitle>
                    {stepOneSecondYearTitle}
                  </AccessPriceTitle>
                  <AccessPrice>
                    {stepOneSecondYearPrice}
                  </AccessPrice>
                </AccessPriceYear>
              </AccessPriceWrapper>
            </AccessFooter>
            <AccessButton marginBottom="4vw" onClick={() => setWarning(true)}>
              {stepOneButtonText}
            </AccessButton>
            <AccessText fontSize="4vw">{stepOneText}</AccessText>
              </AccessInfoWrapper>
              
            
              </AccessWrapper>
          </MobileWrapper>
          </>
        )}
      </Container>
    </Layout>
    </>
  );
};

export default BuyPage;
