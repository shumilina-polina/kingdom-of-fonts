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
  LogoWrapper
} from "./styles";
import Logo from '../../assets/svgs/pavlushin.svg';


const Footer = ({footerReduced}) => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          {!footerReduced && (
            <>
              <Title>В главных ролях</Title>
              <Authors>
                <Author>
                  Автор и дизайнер <a href="https://t.me/andrepavlushin" target="_blank">Андрей Павлушин</a>
                </Author>
                <Author>
                  Автор и редактор <a href="https://t.me/andrepavlushin" target="_blank">Катерина Зырянова</a>
                </Author>
                <Author>
                  Дизайнер <a href="https://t.me/andrepavlushin" target="_blank">Анастасия Савченко</a>
                </Author>
                <Author>
                  Программист <a href="https://t.me/andrepavlushin" target="_blank">Антон Лавринов</a>
                </Author>
              </Authors>
            </>
          )}
          
          <Info>
            <InfoTitle>Если есть вопросы или классный шрифт:</InfoTitle>
            <InfoWrapper>
              <Links>
                <FooterLink href="https://t.me/andrepavlushin" target="_blank">Телеграмировать</FooterLink>
                <FooterLink href="https://t.me/andrepavlushin" target="_blank">Отправить@голубей</FooterLink>
              </Links>
              <InfoYear>2020 → {new Date().getFullYear()}©</InfoYear>
              <LogoWrapper>
                <Logo/>
              </LogoWrapper>
            </InfoWrapper>
            {!footerReduced && <Announce/>}
          </Info>
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
