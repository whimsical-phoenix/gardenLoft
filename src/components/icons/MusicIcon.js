// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledMusicIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const MusicIcon = ({ size = 150 }) => {
  return (
<StyledMusicIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M10.414 3.012A1.5 1.5 0 0 1 9.5 4.926A7.5 7.5 0 1 0 19.5 12c0-1.2-.28-2.33-.779-3.332a1.5 1.5 0 0 1 2.687-1.336A10.463 10.463 0 0 1 22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12c0-4.574 2.924-8.461 7-9.902a1.5 1.5 0 0 1 1.914.914m2.086.002a1.51 1.51 0 0 1 1.86-1.47l.128.037l2.986.996a1.5 1.5 0 0 1-.81 2.885l-.138-.039l-1.026-.342V12l-.005.192a3.5 3.5 0 1 1-3.16-3.676l.165.02V3.013"/></StyledMusicIcon>

  );
};

export default MusicIcon;
