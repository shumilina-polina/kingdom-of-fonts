import React from "react";

import { Container, DesktopWrapper, MobileWrapper } from "../../global";
import Announce from "./Announce";
import Errata from "./Errata";
import SocialLinks from "./SocialLinks";
import {
  Wrapper,
  FooterWrapper,
  Title,
  Authors,
  Author,
  LogoWrapper,
  Logo,
  LogoText,
  FooterColumnSpacer,
  LinksFooterColumn,
  AnnounceFooterColumn,
  CreditsFooterColumn,
  ErrataFooterColumn,
  CopyrightFooterColumn,
} from "./styles";


const Links = () => {
  return (
    <>
      <Title>А ещё мы тут:</Title>
      <SocialLinks/>
    </>
  )
}

const DesignedAt = () => {
  return (
    <LogoText>
      Задизайнили<br/>в КБ Павлушина
    </LogoText>
  )
}

const Copyright = () => {
  return (
    <LogoText>
      →2020<br/>2022©
    </LogoText>
  )
}

const Credits = ({shorten}) => {
  return (
    <>
      <Title>В главных ролях:</Title>
      <Authors>
        <Author>
          <a href="https://t.me/andrepavlushin" target="_blank">
            Андрей Павлушин
          </a>
          <span>Автор и дизайнер</span>
        </Author>
        <Author>
          <a href="https://t.me/katerinazuryan" target="_blank">
            {shorten ? "Катя" : "Катерина"} Зырянова
          </a>
          <span>Автор и редактор</span>
        </Author>
        <Author>
          <a href="https://t.me/stacy_isa" target="_blank">
            Анастасия Исаченко
          </a>
          <span>Дизайнер</span>
        </Author>
        <Author>
          <a href="https://t.me/tupto" target="_blank">
            Павел Лемба
          </a>
          <span>Дизайнер</span>
        </Author>
        <Author>
          <a href="https://t.me/lav_anton" target="_blank">
            Антон Лавринов
          </a>
          <span>Программист</span>
        </Author>
        <Author>
          <a href="https://t.me/Pevzi" target="_blank">
            Михаил Сидоров
          </a>
          <span>Программист</span>
        </Author>
        <Author>
          <a href="https://t.me/vadim_granich" target="_blank">
            Вадим Гранич
          </a>
          <span>Вдохновитель</span>
        </Author>
      </Authors>
    </>
  )
}

const Footer = () => {
  return (
    <Wrapper id="footer">
      <Container>
        <FooterWrapper>
          <LinksFooterColumn>
            <Links/>
            <FooterColumnSpacer/>
            <DesktopWrapper>
              <LogoWrapper>
                <Logo/>
                <DesignedAt/>
              </LogoWrapper>
            </DesktopWrapper>
          </LinksFooterColumn>
          <AnnounceFooterColumn>
            <Announce/>
          </AnnounceFooterColumn>
          <CreditsFooterColumn>
            <MobileWrapper>
              <Credits shorten/>
            </MobileWrapper>
            <DesktopWrapper>
              <Credits/>
            </DesktopWrapper>
          </CreditsFooterColumn>
          <ErrataFooterColumn>
            <Errata/>
          </ErrataFooterColumn>
          <CopyrightFooterColumn>
            <MobileWrapper>
              <DesignedAt/>
            </MobileWrapper>
            <FooterColumnSpacer/>
            <Copyright/>
          </CopyrightFooterColumn>
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
