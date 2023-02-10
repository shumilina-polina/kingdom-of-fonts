import React, { useState } from "react"
import {
  ErrataBlurredLight,
  ErrataWrapper,
  ErrataBox,
  ErrataBoxShadow,
  ErrataContent,
  ErrataTextTop,
  ErrataTextBig,
  ErrataTelegramButton,
  ErrataTextBottom,
} from "./styles"

const Errata = () => {
  const email = "fonts@pavlushin.design"

  const [hasCopied, setHasCopied] = useState(false)

  const onEmailClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setHasCopied(true)
      })
  }

  return (
    <ErrataWrapper>
      <ErrataBoxShadow />
      <ErrataBox>
        <ErrataBlurredLight />
        <ErrataContent>
          <ErrataTextTop>Ребята, у вас Эррата!</ErrataTextTop>
          <ErrataTextBig>Вопросики,<br />предложения,<br />баги и косяки,<br />клёвый шрифт:</ErrataTextBig>
          <ErrataTelegramButton
            href="https://t.me/zuryaaan"
            target="_blank"
          >
            Телеграмировать!
          </ErrataTelegramButton>
          <ErrataTextBottom underlineLinks={!hasCopied}>
            {!hasCopied
              ? <>или <a onClick={onEmailClick}>Отправить@голубей</a></>
              : <a onClick={onEmailClick}>Адрес скопирован :)</a>
            }
          </ErrataTextBottom>
        </ErrataContent>
      </ErrataBox>
    </ErrataWrapper>
  )
}

export default Errata
