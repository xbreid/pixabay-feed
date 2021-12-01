import { atom } from 'recoil';

const feedPaginationState = atom({
  key: 'feedPaginationState',
  default: {
    page: 1,
    per_page: 15,
  }
});

const feedParametersState = atom({
  key: 'feedParametersState',
  default: {
    q: '',
    category: '',
    type: 'photos',
  }
});

const activeFolderState = atom({
  key: 'activeFolderState',
  default: null
});

export {
  feedPaginationState,
  feedParametersState,
  activeFolderState
};