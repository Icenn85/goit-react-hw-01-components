import { Profile } from './Profile/Prifile';
import user from '../user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
