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

const globalMessageOpen = atom({
  key: 'globalMessageOpen',
  default: false,
});

const globalMessage = atom({
  key: 'globalMessage',
  default: {
    severity: 'info',
    message: '',
    duration: 6000
  }
});

export {
  feedPaginationState,
  feedParametersState,
  activeFolderState,
  feedDrawerOpen,
  feedDrawerContent,
  globalMessage,
  globalMessageOpen,
};