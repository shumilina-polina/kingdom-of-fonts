import React from "react"
import styled from "styled-components"

import {
  Footer,
  LinksFooterColumn,
  AnnounceFooterColumn,
  CreditsFooterColumn,
  ErrataFooterColumn,
  CopyrightFooterColumn,
  SocialLinks,
  Navigation,
  Announce,
  Credits,
  DesignedAt,
  Errata,
  Copyright,
} from "../common/Footer"
import { SingleFrameAtlas } from "../common/Atlas"

import behanceIdle from "../../assets/artreview/social/behance-idle.png"
import behanceClick from "../../assets/artreview/social/behance-click.png"
import instagramIdle from "../../assets/artreview/social/instagram-idle.png"
import instagramClick from "../../assets/artreview/social/instagram-click.png"
import pinterestIdle from "../../assets/artreview/social/pinterest-idle.png"
import pinterestClick from "../../assets/artreview/social/pinterest-click.png"
import telegramIdle from "../../assets/artreview/social/telegram-idle.png"
import telegramClick from "../../assets/artreview/social/telegram-click.png"
import _AnnounceStickerIdle from "../../assets/artreview/svgs/announce-idle.svg"

const ArtdirectionFooter = () => {
  return (
    <Footer>
      <LinksFooterColumn>
        <SocialLinks icons={{
          telegram: (
            <SingleFrameAtlas
              idle={<SocialLinkImage src={telegramIdle} />}
              click={<SocialLinkImage src={telegramClick} />}
            />
          ),
          behance: (
            <SingleFrameAtlas
              idle={<SocialLinkImage src={behanceIdle} />}
              click={<SocialLinkImage src={behanceClick} />}
            />
          ),
          instagram: (
            <SingleFrameAtlas
              idle={<SocialLinkImage src={instagramIdle} />}
              click={<SocialLinkImage src={instagramClick} />}
            />
          ),
          pinterest: (
            <SingleFrameAtlas
              idle={<SocialLinkImage src={pinterestIdle} />}
              click={<SocialLinkImage src={pinterestClick} />}
            />
          ),
        }} />
        <Navigation />
      </LinksFooterColumn>
      <AnnounceFooterColumn>
        <Announce image={<AnnounceStickerIdle />}>
          Результаты<br />работ учеников<br />смотри в&nbsp;блоге
        </Announce>
      </AnnounceFooterColumn>
      <CreditsFooterColumn>
        <Credits
          authors={[
            {
              name: "Андрей Павлушин",
              role: "Автор и дизайнер",
              url: "https://t.me/andrepavlushin",
            },
            {
              name: "Павел Лемба",
              role: "Дизайнер",
              url: "https://t.me/tupto",
            },
            {
              name: "Михаил Сидоров",
              role: "Программист",
              url: "https://t.me/Pevzi",
            },
          ]}
        />
        <DesignedAt />
      </CreditsFooterColumn>
      <ErrataFooterColumn>
        <Errata
          url="https://t.me/andrepavlushin"
          email="fonts@pavlushin.design"
        />
      </ErrataFooterColumn>
      <CopyrightFooterColumn>
        <Copyright />
      </CopyrightFooterColumn>
    </Footer>
  )
}

const SocialLinkImage = styled.img`
  width: 100%;
`

const AnnounceStickerIdle = styled(_AnnounceStickerIdle)`
  width: 100%;
  height: 100%;
`

export default ArtdirectionFooter
