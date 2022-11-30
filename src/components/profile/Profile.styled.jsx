import styled from 'styled-components';

export const Avatar = styled.img`
  wight: 100px;
  height: 100px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.secondaryBg};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsLabel = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsQuantity = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
