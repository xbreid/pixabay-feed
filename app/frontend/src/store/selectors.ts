import {selector} from 'recoil';
import qs from 'qs';
import {feedPaginationState, feedParametersState} from "./atoms";
import {fetchData} from "../utils";

const fetchedFeed = selector({
  key: 'fetchedFeed',
  get: async ({get}) => {
    const pagination = get(feedPaginationState);
    const parameters = get(feedParametersState);
    
    try {
      return await fetchData(`/api/${parameters.type}?${
          qs.stringify({...parameters, ...pagination}, {indices: false})
      }`);
    } catch (error) {
      console.log(error);
    }

    return undefined;
  },
});

export {
  // eslint-disable-next-line import/prefer-default-export
  fetchedFeed,
};
