import React from "react"

import telegram from "../../assets/social/telegram.png"
import telegramHover from "../../assets/social/telegram-hover.png"
import behance from "../../assets/social/behance.png"
import behanceHover from "../../assets/social/behance-hover.png"
import instagram from "../../assets/social/instagram.png"
import instagramHover from "../../assets/social/instagram-hover.png"
import pinterest from "../../assets/social/pinterest.png"
import pinterestHover from "../../assets/social/pinterest-hover.png"

import { SocialLinksWrapper, SocialLink } from "./styles"

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink
        image={telegram}
        imageHover={telegramHover}
        href="https://t.me/andreypavlushin"
        target="_blank"
      />
      <SocialLink
        image={behance}
        imageHover={behanceHover}
        href="https://www.behance.net/pavlushin"
        target="_blank"
      />
      <SocialLink
        image={instagram}
        imageHover={instagramHover}
        href="https://www.instagram.com/pavlushin.design/"
        target="_blank"
      />
      <SocialLink
        image={pinterest}
        imageHover={pinterestHover}
        href="https://pin.it/24WNF7K"
        target="_blank"
      />
    </SocialLinksWrapper>
  )
}

export default SocialLinks
