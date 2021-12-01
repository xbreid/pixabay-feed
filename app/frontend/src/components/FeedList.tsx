import * as React from 'react';
import {useRecoilValue} from "recoil";
import {fetchedFeed} from "../store/selectors";
import FeedListItem from './FeedListItem';

function FeedList(): JSX.Element {
  const list = useRecoilValue(fetchedFeed);
  const data = [ ...list.data];

  return (
    <div>
      { data.map((item) => (
        <FeedListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedList;