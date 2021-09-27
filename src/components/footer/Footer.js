import React from "react";
import { Container, CustomLink } from "../../global";
import Announce from "./Announce";
import { Wrapper, FooterWrapper, Title, 
  Authors,
  Author,
  Info,
  InfoTitle,
  InfoWrapper,
  Links,
  Telegram,
  Email,
  InfoYear,
  FooterLink,
  LogoWrapper,
  FooterColumn,
} from "./styles";
import Logo from '../../assets/svgs/pavlushin.svg';


const Footer = ({footerReduced}) => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          {!footerReduced && (
            <>
              <FooterColumn>
                <LogoWrapper>
                  <Logo/>
                </LogoWrapper>
                <InfoYear><span>Мир, труд, дизайн!</span>2020 → {new Date().getFullYear()}©</InfoYear>
              </FooterColumn>
              <FooterColumn>
                <InfoTitle>Если есть вопросы или классный шрифт:</InfoTitle>
                <Links>
                  <FooterLink href="https://t.me/katerinazuryan" target="_blank">→ Телеграмировать</FooterLink>
                  <br/>
                  <FooterLink type="email" href="mailto:fonts@pavlushin.design">→ Отправить@голубей</FooterLink>
                </Links>
              </FooterColumn>
              <FooterColumn>
                <Title>В главных ролях</Title>
                <Authors>
                  <Author>
                    <a href="https://t.me/andrepavlushin" target="_blank">Андрей Павлушин</a> Автор и дизайнер
                  </Author>
                  <Author>
                    <a href="https://t.me/katerinazuryan" target="_blank">Катерина Зырянова</a> Автор и редактор
                  </Author>
                  <Author>
                    <a href="https://t.me/stacy_isa" target="_blank">Анастасия Исаченко</a> Дизайнер 
                  </Author>
                  <Author>
                    <a href="https://t.me/tupto" target="_blank">Павел Лемба Дизайнер</a> Дизайнер 
                  </Author>
                  <Author>
                    <a href="https://t.me/lav_anton" target="_blank">Антон Лавринов</a> Программист 
                  </Author>
                  <Author>
                    <a href="https://t.me/vadim_granich" target="_blank">Вадим Гранич</a> Вдохновитель
                  </Author>
                </Authors>
              </FooterColumn>
              <FooterColumn>
                <Announce/>
              </FooterColumn>
            </>
          )}
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
