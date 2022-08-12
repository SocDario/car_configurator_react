import { css } from '@emotion/react';
import { small } from './fonts';
import { boxShadow, colors } from './variables';

export const dropdownContainer = css`
  ${small}
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: ${colors.white};
  box-shadow: ${boxShadow.shadowPrimary};
`;

export const mainMenuDropdown = css`
  ${dropdownContainer}
  right: -40px;
  top: 60px;
`;

export const carConfigDropdown = css`
  ${dropdownContainer}
  min-width: 200px;
  right: 0px;
  top: 30px;
`;
