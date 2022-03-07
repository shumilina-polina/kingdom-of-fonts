import React from "react";

import { Container } from "../../global";
import Announce from "./Announce";
import Errata from "./Errata";
import SocialLinks from "./SocialLinks";
import {
  Wrapper, FooterWrapper, Title,
  Authors,
  Author,
  LogoWrapper,
  LogoText,
  FooterColumn,
  DesktopFooter,
  Copyright,
  FooterColumnSpacer,
} from "./styles";
import Logo from '../../assets/svgs/pavlushin.svg';


const Footer = ({footerReduced}) => {
  return (
    <Wrapper id="footer">
      <Container>
        <FooterWrapper>
          {!footerReduced && (
            <>
              <DesktopFooter>
                <FooterColumn>
                  <Title>А ещё мы тут:</Title>
                  <SocialLinks />
                  <FooterColumnSpacer />
                  <LogoWrapper>
                    <Logo/>
                    <LogoText>
                      Задизайнили<br/>в КБ Павлушина
                    </LogoText>
                  </LogoWrapper>
                </FooterColumn>
                <FooterColumn>
                  <Announce/>
                </FooterColumn>
                <FooterColumn>
                  <Title>В главных ролях:</Title>
                  <Authors>
                    <Author>
                      <a href="https://t.me/andrepavlushin" target="_blank">Андрей Павлушин</a> <br/><span>Автор и дизайнер</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/katerinazuryan" target="_blank">Катерина Зырянова</a> <br/><span>Автор и редактор</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/stacy_isa" target="_blank">Анастасия Исаченко</a> <br/><span>Дизайнер</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/tupto" target="_blank">Павел Лемба</a> <br/><span>Дизайнер</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/lav_anton" target="_blank">Антон Лавринов</a> <br/><span>Программист</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/Pevzi" target="_blank">Михаил Сидоров</a> <br/><span>Программист</span>
                    </Author>
                    <Author>
                      <a href="https://t.me/vadim_granich" target="_blank">Вадим Гранич</a> <br/><span>Вдохновитель</span>
                    </Author>
                  </Authors>
                </FooterColumn>
                <FooterColumn>
                  <Errata />
                </FooterColumn>
                <FooterColumn>
                  <FooterColumnSpacer />
                  <Copyright>→2020<br />2022©</Copyright>
                </FooterColumn>
              </DesktopFooter>
            </>
          )}
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
