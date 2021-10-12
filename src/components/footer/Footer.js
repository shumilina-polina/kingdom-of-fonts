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
  DesktopFooter,
  MobileFooter,
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
                  <LogoWrapper>
                    <Logo/>
                  </LogoWrapper>
                  <InfoYear><span>Мир, труд, дизайн!</span>2020 → {new Date().getFullYear()}©</InfoYear>
                </FooterColumn>
                <FooterColumn>
                  <InfoTitle>Если есть вопросики или классный шрифт:</InfoTitle>
                  <Links>
                    <FooterLink href="https://t.me/katerinazuryan" target="_blank">→ Телеграммировать</FooterLink>
                    <br/>
                    <FooterLink type="email" href="mailto:fonts@pavlushin.design">→ Отправить@голубей</FooterLink>
                  </Links>
                </FooterColumn>
                <FooterColumn>
                  <Title>В главных ролях</Title>
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
                      <a href="https://t.me/vadim_granich" target="_blank">Вадим Гранич</a> <br/><span>Вдохновитель</span>
                    </Author>
                  </Authors>
                </FooterColumn>
                <FooterColumn>
                  <Announce/>
                </FooterColumn>
              </DesktopFooter>
              <MobileFooter>
                <FooterColumn>
                  <Announce/>
                </FooterColumn>
                <FooterColumn>
                  <Title>В главных ролях</Title>
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
                      <a href="https://t.me/vadim_granich" target="_blank">Вадим Гранич</a> <br/><span>Вдохновитель</span>
                    </Author>
                  </Authors>
                </FooterColumn>
                <FooterColumn>
                  <InfoTitle>Если есть вопросики или классный шрифт:</InfoTitle>
                  <Links>
                    <FooterLink href="https://t.me/katerinazuryan" target="_blank">Телеграммировать</FooterLink>
                    <br/>
                    <FooterLink type="email" href="mailto:fonts@pavlushin.design">Отправить@голубей</FooterLink>
                  </Links>
                </FooterColumn>
                <FooterColumn> 
                  <InfoYear><span>Мир, труд, дизайн!</span>2020 → {new Date().getFullYear()}©</InfoYear>
                  <LogoWrapper>
                    <Logo/>
                  </LogoWrapper>
                </FooterColumn>
              </MobileFooter>
            </>
          )}
        </FooterWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
