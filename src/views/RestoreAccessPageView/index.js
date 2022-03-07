
import React from 'react'
import { RestoreButton, RestoreText, RestoreWrapper } from './style'
import ArrowIcon from '../../assets/svgs/arrow-icon.svg';

const RestoreAccessPageView = () => {
    return (
        <RestoreWrapper>
            <RestoreText>
                Восстань, пророк, и виждь, и внемли,<br/>
                Исполнись волею моей,<br/>
                И, обходя моря и земли,<br/>
                Шрифтами жги сердца людей <ArrowIcon/>
            </RestoreText>
            <RestoreButton to="/">Шрифты</RestoreButton>
        </RestoreWrapper>
    )
}

export default RestoreAccessPageView
