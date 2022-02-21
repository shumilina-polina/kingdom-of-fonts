import styled from "styled-components"

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  width: 36px;
  height: 36px;
  
  &:hover {
    filter: brightness(70%);
  }
`

export const UserMenuWrapper = styled.div`
  position: relative;
`

export const UserMenuBox = styled.div`
  width: 300px;
  
  border-radius: 8px;
  box-shadow: 0px 0px 25px rgba(69, 231, 134, 0.2);
  
  background: #151515;
  
  position: absolute;
  z-index: 4;
  right: 0;
  top: 100%;
`

const UserMenuItemBase = styled.div`
  background: none;
  text-align: inherit;
  text-decoration: none;
  
  cursor: pointer;
  
  width: 100%;
  min-height: 66px;
  
  padding: 18px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:not(:last-child) {
    border-bottom: 2px #222222 solid;
  }
`

export const UserMenuItem = styled(UserMenuItemBase)``

export const UserMenuItemActive = styled(UserMenuItemBase)`
  cursor: unset;
`

export const UserMenuItemRow = styled.div`
  width: 100%;
  height: 22px;
  
  display: flex;
`

export const UserMenuItemTextBase = styled.div`
  flex: 1;
  
  color: white;
  font-size: 16px;
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
  flex: 1;
  
  color: white;
  background: none;
  border: none;
  font-size: 16px;
  
  ${props => props.disabled && `
    filter: brightness(70%);
  `}
`

export const UserMenuItemIcon = styled.div`
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
  font-size: 16px;
  
  margin-top: 5px;
`
