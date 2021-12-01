import * as React from 'react';
import Typography from '@mui/material/Typography';
import {useRecoilValue} from "recoil";
import FeedList from "../components/FeedList";
import FeedBanner from "../components/FeedBanner";
import FeedFolderButton from "../components/FeedFolderButton";
import {activeFolderState} from "../store/atoms";

// Accepted Values
// backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals,
// industry, computer, food, sports, transportation, travel, buildings, business, music
const folderCategories = [
  {
    label: 'Clouds',
    query: 'clouds',
    category: 'nature',
    type: 'photos',
    color: '#bae1ff'
  },
  {
    label: 'Cars',
    query: 'cars',
    category: 'transportation',
    type: 'photos',
    color: '#baffc9'
  },
  {
    label: 'Urban (Videos)',
    query: 'urban',
    category: 'buildings',
    type: 'videos',
    color: '#ffee93'
  },
  {
    label: 'Backgrounds',
    query: '',
    category: 'backgrounds',
    type: 'photos',
    color: '#ffdfba',
  },
  {
    label: 'Travel',
    query: '',
    category: 'travel',
    type: 'photos',
    color: '#ffb3ba'
  },
];

function FeedPage(): JSX.Element {
  const activeFolder = useRecoilValue(activeFolderState);

  return (
    <div className="Container">
      <article>
        <FeedBanner />
        <br />
        <Typography variant="h6">Folders</Typography>
        <section>
          {folderCategories.map((folder) => (
            <FeedFolderButton key={folder.label} folder={folder} />
          ))}
        </section>
        <br />
        <Typography variant="h6">{`${activeFolder || 'Media'} Feed`}</Typography>
        <React.Suspense fallback={<div>loading...</div>}>
          <FeedList />
        </React.Suspense>
        <br />
      </article>
    </div>
  );
}

export default FeedPage;