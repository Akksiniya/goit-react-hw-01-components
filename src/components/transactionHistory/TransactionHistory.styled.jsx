import styled from "styled-components";

export const Title = styled.th`
width: calc(100% / 3);
height: 40px;
color: ${p => p.theme.colors.secondaryText};
background-color: ${p => p.theme.colors.mainBg};
text-transform: uppercase
`;

export const Columns = styled.tr`
  height: 40px;
  
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Info = styled.td`
text-align: left;
padding-left: 100px;
`;