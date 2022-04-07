import styled from "styled-components"

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  width: 36px;
  height: 36px;
  
  filter: brightness(25%);
  
  &:hover {
    filter: brightness(17%);
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 1260px) {
    width: 7.5vw;
    height: 7.5vw;
  }
`

export const UserMenuWrapper = styled.div`
  position: relative;
  
  font-size: 16px;
  
  @media (max-width: 1260px) {
    font-size: 5vw;
  }
`

export const UserMenuBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  
  border-radius: 8px;
  box-shadow: 0px 0px 25px rgba(69, 231, 134, 0.2);
  
  background: #151515;
  
  position: absolute;
  z-index: 4;
  right: 0;
  top: 100%;
  
  @media (max-width: 1260px) {
    position: fixed;

    top: 23.9vw;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: auto;

    border-radius: 0;
    box-shadow: none;

    border-top: 0.125em #222222 solid;
  }
`

const UserMenuItemBase = styled.div`
  font-size: inherit;

  background: none;
  text-align: inherit;
  text-decoration: none;
  
  cursor: pointer;
  
  width: 100%;
  min-height: 4.125em;
  
  padding: 1.125em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:not(:last-child) {
    border-bottom: 0.125em #222222 solid;
  }

  @media (max-width: 1260px) {
    padding: 1.125em 2em;
  }
`

export const UserMenuItem = styled(UserMenuItemBase)``

export const UserMenuItemActive = styled(UserMenuItemBase)`
  cursor: unset;
`

export const UserMenuItemRow = styled.div`
  width: 100%;
  height: 1.375em;
  
  display: flex;
`

export const UserMenuItemTextBase = styled.div`
  flex: 1;
  
  color: white;
`

export const UserMenuItemText = styled(UserMenuItemTextBase)`
  ${UserMenuItem}:hover & {
    filter: brightness(70%);
  }
`

export const UserMenuItemTextPlaceholder = styled(UserMenuItemTextBase)`
  color: #444444;
`

export const UserMenuItemInput = styled.input`
  font-size: inherit;
  
  flex: 1;
  
  color: white;
  background: none;
  border: none;
  
  ${props => props.disabled && `
    filter: brightness(70%);
  `}
`

export const UserMenuItemIcon = styled.div`
  font-size: inherit;
  
  width: 1em;
  height: 1em;
  
  svg {
    width: 100%;
    height: 100%;
  }

  background: none;
  
  ${UserMenuItem}:hover & {
    filter: brightness(70%);
  }
  
  ${props => props.hoverable && `
    cursor: pointer;
  
    &:hover {
      filter: brightness(70%);
    }
  `}
`

export const UserMenuItemSubText = styled.div`
  color: #797B7B;
  
  margin-top: 0.3125em;
`

export const UserMenuSpacerItem = styled.div`
  @media (max-width: 1260px) {
    flex: 1;
  
    &:not(:last-child) {
      border-bottom: 0.125em #222222 solid;
    }
  }
`
