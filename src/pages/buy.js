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

// markup
const BuyPage = () => {
  const [warning, setWarning] = useState(false)
  return (
    <Layout>
      <CurveIcon/>
      <LogoWithCurve>
        <Logo />
        <ShadowCircle/>
      </LogoWithCurve>
      <Container>
        {warning ? (
          <AccessWrapper>
            <AccessImage src={buyImage} />
            <AccessInfo>
              <AccessTitle>Один нюанс</AccessTitle>
              <AccessText>После успешной оплаты на Юмани появится окно с подтверждением и кнопкой <span>вернуться на сайт</span>, на эту <span>кнопку</span> нужно <span>нажать</span>, чтобы  вернуться к нам сюда за шрифтами</AccessText>
            </AccessInfo>
            <AccessLine/>
            <AccessFooter>
              <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
                <input type="hidden" name="receiver" value="410016040384130" />
                {/* <input
                  type="hidden"
                  name="formcomment"
                  value="Проект «Железный человек»: реактор холодного ядерного синтеза"
                />
                <input
                  type="hidden"
                  name="short-dest"
                  value="Проект «Железный человек»: реактор холодного ядерного синтеза"
                /> */}
                {/* <input type="hidden" name="label" value="$order_id" /> */}
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
                {/* <label>
                  <input type="radio" name="paymentType" value="PC" />
                  ЮMoney
                </label>
                <label>
                  <input type="radio" name="paymentType" value="AC" />
                  Банковской картой
                </label> */}
                <AccessButton type="submit" value="Оплатить">Оплатить</AccessButton>
              </form>
              <ArrowIcon/>
              <YouMoneyWrapper>
                <YouMoneyLogo/>
                <YouMoneyText>
                  Перейти к оплате на Юмани
                </YouMoneyText>
              </YouMoneyWrapper>
            </AccessFooter>
          </AccessWrapper>
        ) : (
          <AccessWrapper>
            <AccessImage src={buyImage} />
            <AccessInfo>
              <AccessTitle>Подписка на год</AccessTitle>
              <AccessText>Нажимая кнопку, <span>вы покупаете доступ к сайту</span> с подборкой клёвых бесплатных шрифтов, собранных по всем интернетам и соглашаетесь с тем, что вы прекрасны</AccessText>
            </AccessInfo>
            <AccessLine/>
            <AccessFooter>
              <AccessButton onClick={() => setWarning(true)}>
                Подписаться
              </AccessButton>
              <ArrowIcon/>
              <AccessPriceWrapper>
                <AccessPriceYear>
                  <AccessPriceTitle>
                    Первый год <span>1990</span>
                  </AccessPriceTitle>
                  <AccessPrice green>
                    990<span>₽</span>
                  </AccessPrice>
                </AccessPriceYear>
                <AccessPriceYear>
                <AccessPriceTitle>
                    Со второго года
                  </AccessPriceTitle>
                  <AccessPrice>
                    199<span>₽/мес</span>
                  </AccessPrice>
                </AccessPriceYear>
              </AccessPriceWrapper>
            </AccessFooter>
          </AccessWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default BuyPage;
