import * as React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import Pagination from '@mui/material/Pagination';
import {fetchedFeed} from "../store/selectors";
import FeedListItem from './FeedListItem';
import {feedPaginationState} from "../store/atoms";

function FeedList(): JSX.Element | null {
  const list = useRecoilValue(fetchedFeed);
  const count = Math.floor(list.total / 10);
  const [pagination, setPagination] = useRecoilState(feedPaginationState);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination({
      ...pagination,
      page: value,
    });
  };

  if (!list.data) return null;

  return (
    <div>
      { list.data.map((item: any) => (
        <FeedListItem key={item.id} item={item} />
      ))}
      <div style={{ width: '100%' }} className="flex flex--justify-end flex--align-end">
        <Pagination
          sx={{ mt: 2 }}
          count={count}
          onChange={handleChange}
          page={pagination.page}
          color="primary"
          siblingCount={0}
        />
      </div>
    </div>
  );
}

export default FeedList;