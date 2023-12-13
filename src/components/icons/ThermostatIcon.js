// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledThermostatIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const ThermostatIcon = ({ size = 150 }) => {
  return (
<StyledThermostatIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M13 11V9h5v2h-5Zm0-4V5h8v2h-8ZM8 21q-2.075 0-3.538-1.463T3 16q0-1.2.525-2.238T5 12V6q0-1.25.875-2.125T8 3q1.25 0 2.125.875T11 6v6q.95.725 1.475 1.763T13 16q0 2.075-1.463 3.538T8 21Zm-3-5h6q0-.725-.313-1.35T9.8 13.6L9 13V6q0-.425-.288-.713T8 5q-.425 0-.713.288T7 6v7l-.8.6q-.575.425-.888 1.05T5 16Z"/></StyledThermostatIcon>
  );
};

export default ThermostatIcon;
