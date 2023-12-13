// src/components/CustomIcon.js

import React from 'react';
import styled from 'styled-components';

const StyledDryCleaningIcon = styled('svg')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const DryCleaningIcon = ({ size = 150 }) => {
  return (
<StyledDryCleaningIcon xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 24 24"><path d="M7 22v-6H5.4q-1 0-1.7-.7T3 13.6q0-.725.4-1.337t1.05-.913L11 8.45V7.8q-.9-.325-1.45-1.087T9 5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5h-2q0-.425-.288-.712T12 4q-.425 0-.712.288T11 5q0 .425.288.713T12 6t.713.288Q13 6.575 13 7v1.45l6.55 2.9q.65.3 1.05.913T21 13.6q0 1-.7 1.7t-1.7.7H17v6zm-1.6-8H7v-1h10v1h1.6q.175 0 .288-.125T19 13.55q0-.125-.062-.213t-.188-.137l-6.75-3l-6.75 3q-.125.05-.187.138T5 13.55q0 .2.113.325T5.4 14"/></StyledDryCleaningIcon>
  );
};

export default DryCleaningIcon;
