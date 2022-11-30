import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import {
  Avatar,
  UserName,
  UserText,
  StatsLabel,
  StatsQuantity,
} from 'components/profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="mainBg"
      width="300px"
      height="400px"
      textAlign="center"
      mt="30px"
      mx="auto"
      border="borderBold"
      boxShadow="normal"
    >
      <Box mt="40px">
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </Box>

      <Box
        as="ul"
        width="100%"
        height="60px"
        display="flex"
        justifyContent="space-between"
        bg="secondaryBg"
        alignItems="center"
        textAlign="center"
        mt="43px"
        p="0"
        borderTop="borderNorm"
      >
        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          borderRight="borderNorm"
        >
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </Box>
        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          borderRight="borderNorm"
        >
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </Box>
        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          borderRight="borderNorm"
        >
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
