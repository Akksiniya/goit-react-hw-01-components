import styled from "styled-components";

export const Title = styled.h1`

color: ${p => p.theme.colors.secondaryText};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const Label = styled.span`
display: block;
color: ${p => p.theme.colors.white};
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const Percentage = styled.span`
display: block;
color: ${p => p.theme.colors.white};
margin-top: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`;