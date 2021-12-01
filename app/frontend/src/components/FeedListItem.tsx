import * as React from 'react';
import {styled} from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import {getUrlExtension} from "../utils";

const ListItemButton = styled(ButtonBase)(() => ({
  width: '100%',
  position: 'relative',
  borderRadius: '18px',
  marginRight: 12,
  marginTop: 12,
}));

const FeedListCard = styled(Card)(() => ({
  padding: 12,
  width: '100%',
  borderRadius: '18px',
  border: 'none'
}));

const FeedListChip = styled(Chip)(() =>  ({
  borderRadius: 5,
  height: 19,
  marginBottom: 4,
  '& > .MuiChip-label': {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 0.6,
    textTransform: 'capitalize'
  }
}));

function FeedListItem({ item }: any): JSX.Element {
  return (
    <ListItemButton focusRipple>
      <FeedListCard className="flex flex--align-center flex--justify-sb" variant="outlined">
        <div className="flex flex--align-center">
          <CardMedia
            component="img"
            height="50"
            width="50"
            image={item.previewURL}
            alt="red bull"
            style={{ width: 50, borderRadius: 12 }}
          />
          <div style={{ marginLeft: 12 }} className="flex flex--column flex--align-start">
            <Typography
              className="truncate"
              sx={{ width: 180, fontWeight: 500 }}
              variant="subtitle1"
            >
              {item.pageURL.replace('https://pixabay.com/photos/', '')}
            </Typography>
            <Typography
              sx={{ fontSize: 13, color: 'dimgrey', }}
              variant="subtitle2"
            >
              {item.tags}
            </Typography>
          </div>
        </div>
        <div className="flex flex--column flex--align-end">
          <FeedListChip
            label={item.type}
            sx={{ background: item.type === 'photo' ? '#ffb3ba' : '#bae1ff' }}
          />
          <Typography
            sx={{ fontSize: 13, color: 'dimgrey', textTransform: 'uppercase' }}
            variant="subtitle2"
          >
            {getUrlExtension(item.webformatURL)}
          </Typography>
        </div>
      </FeedListCard>
    </ListItemButton>
  );
}

export default FeedListItem;