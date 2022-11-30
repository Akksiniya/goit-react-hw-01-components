import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      width="300px"
      mt="50px"
      mx="auto"
    >
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          id={item.id}
        ></FriendListItem>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
