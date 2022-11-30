import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {
  FriendOnline,
  Avatar,
  Name,
} from 'components/friendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Box
      as="li"
      key={id}
      display="flex"
      alignItems="center"
      width="100%"
      height="100px"
      border="borderNorm"
      borderRadius="normal"
      mb="10px"
      bg="mainBg"
      boxShadow="normal"
    >
      <FriendOnline isOnline={isOnline}>{isOnline}</FriendOnline>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
