import React from 'react'
import { AnnounceWrapper, AnnouncementContent, AnnouncementTitle, AnnouncementText } from './styles';
import image1 from '../../assets/announce-star-1.png';
import image2 from '../../assets/announce-star-2.png';

const Announce = () => {
    return (
        <AnnounceWrapper href="https://t.me/andrepavlushin" target="_blank" image1={image1} image2={image2}>
            <AnnouncementContent>
                <AnnouncementTitle>Нью</AnnouncementTitle>
                <AnnouncementText>Анонсы новых крутых шрифтов будут в блоге <span>подпишись</span></AnnouncementText>
            </AnnouncementContent>
        </AnnounceWrapper>
    )
}

export default Announce
