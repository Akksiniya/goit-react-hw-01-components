import { Profile } from 'components/profile/Profile'
import dataProfile from 'data/user.json'

export const App = () => {
  return (
    <div>
 <Profile
  username={dataProfile.username}
  tag={dataProfile.tag}
  location={dataProfile.location}
  avatar={dataProfile.avatar}
  stats={dataProfile.stats}
/>
  </div>
  );
};
