import { Profile } from 'components/profile/Profile'
import dataProfile from 'data/user.json'

import {Statistics} from 'components/statistics/Statistics'
import dataStatistics from 'data/data.json'

import { FriendList } from 'components/friendList/FriendList'
import dataFriendList from 'data/friends.json'

import {TransactionHistory} from 'components/transactionHistory/TransactionHistory'
import dataTransactions from 'data/transactions.json'

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

<Statistics 
stats={dataStatistics}
  // key={dataStatistics.id}
  title="Upload stats"
  // label={dataStatistics.label}
  // percentage={dataStatistics.percentage}


 
/>

<FriendList friends={dataFriendList} />;

<TransactionHistory items={dataTransactions} />;



  </div>
  );
};
