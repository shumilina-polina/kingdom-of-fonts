import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/index-page/cards/CardList";
import { cards } from "../components/index-page/cards/data";
import Filters from "../components/index-page/filters/Filters";
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";
import { Link } from "gatsby";

// markup
const BuyPage = () => {
  return (
    <Layout>
      <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
        <input type="hidden" name="receiver" value="410011022140121" />
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
        <input type="hidden" name="targets" value="Доступ к подборке шрифтов" />
        <input type="hidden" name="sum" value="900" data-type="number" />
        <input
          type="hidden"
          name="comment"
          value="Хочу получить доступ к подборке шрифтов."
        />
        <input type="hidden" name="need-fio" value="false" />
        <input type="hidden" name="need-email" value="true" />
        <input type="hidden" name="need-phone" value="false" />
        <input type="hidden" name="need-address" value="false" />
        <input
          type="hidden"
          name="successURL"
          value="https://granich.design/"
        />
        {/* <label>
          <input type="radio" name="paymentType" value="PC" />
          ЮMoney
        </label>
        <label>
          <input type="radio" name="paymentType" value="AC" />
          Банковской картой
        </label> */}
        <input type="submit" value="Перевести" />
      </form>
    </Layout>
  );
};

export default BuyPage;
