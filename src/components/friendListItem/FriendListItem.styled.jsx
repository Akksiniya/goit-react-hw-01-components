import styled from 'styled-components';

export const FriendOnline = styled.span`
  width: 15px;
  height: 15px;
  margin-left: 15px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.offline;
  }};
`;

export const Avatar = styled.img`
  wight: 48px;
  height: 48px;
  margin-left: 15px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondaryBg};
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  //
`;
