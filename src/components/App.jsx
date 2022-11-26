import { Profile } from 'components/profile/Profile'
import dataProfile from 'data/user.json'

import {Statistics} from 'components/statistics/Statistics'
import dataStatistics from 'data/data.json'

import { FriendList } from 'components/friendList/FriendList'
import dataFriendList from 'data/friends.json'

import {TransactionHistory} from 'components/transactionHistory/TransactionHistory'
import dataTransactions from 'data/transactions.json'

import {Box} from 'components/Box'

export const App = () => {
  return (
<Box 

width = '720px'
textAlign = 'center'
height="100%" bg="#f2f1ed" mx="auto" pt="10px">
    
 <Profile
  username={dataProfile.username}
  tag={dataProfile.tag}
  location={dataProfile.location}
  avatar={dataProfile.avatar}
  stats={dataProfile.stats}
/>

<Statistics 
stats={dataStatistics}
   title="Upload stats"
  />

<FriendList friends={dataFriendList} />

<TransactionHistory items={dataTransactions} />

  </Box>
  );
};
