import React, { useContext, useState } from "react"
import { useDetectClickOutside } from "react-detect-click-outside"
import { Link } from 'gatsby'

import { UserContext } from "../../context/UserContext"

import {
  HeaderButton,
  UserMenuBox,
  UserMenuItem,
  UserMenuItemActive,
  UserMenuItemRow,
  UserMenuItemText,
  UserMenuItemInput,
  UserMenuItemIcon,
  UserMenuItemSubText,
  UserMenuWrapper, UserMenuItemTextPlaceholder,
} from "./styles"
import UserIcon from "../../assets/svgs/user-icon.svg"
import PencilIcon from "../../assets/svgs/pencil-icon.svg"
import CheckIcon from "../../assets/svgs/check-icon-16.svg"
import LoginIcon from "../../assets/svgs/login-icon.svg"
import LogoutIcon from "../../assets/svgs/logout-icon.svg"

const UserInfoItem = () => {
  const { user, updateName, isUpdating } = useContext(UserContext)

  const [name, setName] = useState(user.name)
  const [isEditing, setIsEditing] = useState(false)

  const onClick = (e) => {
    e.stopPropagation()

    setIsEditing(true)
  }

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (isUpdating) return

    updateName(name)
      .finally(() => {
        setIsEditing(false)
      })
  }

  return !isEditing ? (
    <UserMenuItem onClick={onClick}>
      <UserMenuItemRow>
        {user.name ? (
          <UserMenuItemText>{user.name}</UserMenuItemText>
        ) : (
          <UserMenuItemTextPlaceholder>Имя Фамилия</UserMenuItemTextPlaceholder>
        )}
        <UserMenuItemIcon><PencilIcon /></UserMenuItemIcon>
      </UserMenuItemRow>
      <UserMenuItemSubText>{user.email}</UserMenuItemSubText>
    </UserMenuItem>
  ) : (
    <UserMenuItemActive>
      <UserMenuItemRow as="form" onSubmit={onSubmit}>
        <UserMenuItemInput value={name} onChange={onNameChange} autoFocus />
        {!isUpdating && (
          <UserMenuItemIcon
            as="button"
            hoverable
            disabled={isUpdating}
          >
            <CheckIcon />
          </UserMenuItemIcon>
        )}
      </UserMenuItemRow>
      <UserMenuItemSubText>{user.email}</UserMenuItemSubText>
    </UserMenuItemActive>
  )
}

const UserLogoutItem = () => {
  return (
    <form action="/logout">
      <UserMenuItem as="button">
        <UserMenuItemRow>
          <UserMenuItemText>Выйти</UserMenuItemText>
          <UserMenuItemIcon><LogoutIcon /></UserMenuItemIcon>
        </UserMenuItemRow>
      </UserMenuItem>
    </form>
  )
}

const UserLoginItem = ({ onClick }) => {
  return (
    <UserMenuItem as={Link} to="/fonts/login/" onClick={onClick}>
      <UserMenuItemRow>
        <UserMenuItemText>Войти</UserMenuItemText>
        <UserMenuItemIcon><LoginIcon /></UserMenuItemIcon>
      </UserMenuItemRow>
    </UserMenuItem>
  )
}

const UserMenu = ({ onClose = () => {} }) => {
  const { user } = useContext(UserContext)

  const outsideClickRef = useDetectClickOutside({onTriggered: onClose})

  return (
    <UserMenuBox ref={outsideClickRef}>
      {user ? (
        <>
          <UserInfoItem />
          <UserLogoutItem />
        </>
      ) : (
        <>
          <UserLoginItem onClick={onClose} />
        </>
      )}
    </UserMenuBox>
  )
}

const UserMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <UserMenuWrapper>
      <HeaderButton onClick={toggle}>
        <UserIcon />
      </HeaderButton>
      {isOpen && <UserMenu onClose={close} />}
    </UserMenuWrapper>
  )
}

export default UserMenuButton
