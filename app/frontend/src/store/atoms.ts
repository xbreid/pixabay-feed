import { atom } from 'recoil';

const feedPaginationState = atom({
  key: 'feedPaginationState',
  default: {
    page: 1,
    per_page: 10,
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

const feedDrawerOpen = atom({
  key: 'feedDrawerOpen',
  default: false
});

const feedDrawerContent = atom({
  key: 'feedDrawerContent',
  default: null
});

export {
  feedPaginationState,
  feedParametersState,
  activeFolderState,
  feedDrawerOpen,
  feedDrawerContent,
};