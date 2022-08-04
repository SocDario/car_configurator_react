/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/Header.styles';
import logo from 'assets/header/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { DropdownMenu } from './DropdownMenu';
import { useFirebaseAuth } from 'modules/auth';

export const Header: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { handleSignOut } = useFirebaseAuth();
  const location = useLocation();

  function handleToggleDropdown() {
    setIsToggled(!isToggled);
  }

  return (
    <header css={styles.header}>
      <img src={logo} />
      <nav css={styles.navbar}>
        <Link
          css={
            location.pathname === '/'
              ? styles.configureCarLink
              : styles.configureCarLinkHidden
          }
          to="/select-car"
        >
          Configure a car
        </Link>
        <button css={styles.hamburgerButton} onClick={handleToggleDropdown}>
          <div
            css={
              isToggled
                ? styles.hamburgerButtonOpened
                : styles.hamburgerButtonClosed
            }
          />
        </button>
        <DropdownMenu isToggled={isToggled} type={'mainMenuDropdown'}>
          <Link
            css={styles.dropdownItemLink}
            to="/"
            onClick={handleToggleDropdown}
          >
            My saved configurations
          </Link>
          <button css={styles.dropdownItemButton} onClick={handleSignOut}>
            Logout
          </button>
        </DropdownMenu>
      </nav>
    </header>
  );
};
