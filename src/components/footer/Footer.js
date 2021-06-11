import React from "react";
import { Container, CustomLink } from "../../global";
import { Wrapper, FooterWrapper, FooterInfoItem } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          <FooterInfoItem>Автор: Андрей Павлушин</FooterInfoItem>
          <FooterInfoItem>Электропочта: mail@gmail.com</FooterInfoItem>
          <FooterInfoItem>
            Телега:{" "}
            <a target="_blank" href="https://t.me/andrepavlushin">
              https://t.me/andrepavlushin
            </a>
          </FooterInfoItem>
          <FooterInfoItem>Задизайнено в 2021 году</FooterInfoItem>
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
