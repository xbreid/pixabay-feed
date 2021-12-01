import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {useRecoilState} from "recoil";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {styled} from "@mui/material/styles";
import {feedDrawerContent, feedDrawerOpen} from "../store/atoms";
import ReactPlayer from 'react-player';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import PhotoIcon from '@mui/icons-material/Photo';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import {numberWithCommas} from "../utils";

const DrawerWrapper = styled(Drawer)(() => ({
  '& > .MuiPaper-root': {
    width: 300,
    padding: 16,
    '@media (min-width:740px)': {
      width: 500,
    }
  },
}));

function ContentDrawer(): JSX.Element | null {
  const [open, setOpen] = useRecoilState(feedDrawerOpen);
  const [content, setContent] = useRecoilState<any>(feedDrawerContent);

  if (!content) return null;

  return (
    <DrawerWrapper
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false);
        setContent(null);
      }}
    >
      <Box className="flex flex--align-center">
        { content.type === 'photo' ? (
          <PhotoIcon />
        ) : (
         <VideoFileIcon />
        )}
        <Typography sx={{ ml: 1 }} variant="h6">File Preview</Typography>
      </Box>
      <br />
      <Divider />
      <br />
      <Box>
        { content.type === 'photo' && (
          <img style={{ width: '100%' }} src={content.webformatURL} alt="preview" />
        )}
        { content.type === 'film' && (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={content.videos.tiny.url}
              width='100%'
              height='100%'
              playing
            />
          </div>
        )}
      </Box>
      <br />
      <Divider />
      <br />
      <Box>
        <Typography
          className="truncate"
          sx={{ width: 200, fontWeight: 500 }}
          variant="subtitle1"
        >
          {content.pageURL.replace('https://pixabay.com/photos/', '')}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Tags:
          {' '}
          {numberWithCommas(content.tags) || '0'}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Views:
          {' '}
          {numberWithCommas(content.views) || '0'}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Downloads:
          {' '}
          {numberWithCommas(content.downloads) || '0'}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Likes:
          {' '}
          {numberWithCommas(content.likes) || '0'}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Comments:
          {' '}
          {numberWithCommas(content.comments) || '0'}
        </Typography>
        <Typography
          sx={{ fontSize: 13, color: 'dimgrey', }}
          variant="subtitle2"
        >
          Collections:
          {' '}
          {numberWithCommas(content.collections) || '0'}
        </Typography>
        <Box className="flex flex--align-center" sx={{ mt: 1 }}>
          <Avatar alt="Remy Sharp" src={content.userImageURL} />
          <Typography
            sx={{ fontSize: 13, color: 'dimgrey', ml: 1 }}
            variant="subtitle2"
          >
            {content.user}
          </Typography>
        </Box>

      </Box>
    </DrawerWrapper>
  );
}

export default ContentDrawer;