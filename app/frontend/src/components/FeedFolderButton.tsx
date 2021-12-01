import * as React from 'react';
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import {useRecoilState, useSetRecoilState} from "recoil";
import {activeFolderState, feedParametersState} from "../store/atoms";

const FolderButton = styled(ButtonBase)(() => ({
  position: 'relative',
  borderRadius: '28px',
  marginRight: 12,
  marginTop: 12,
}));

const FolderCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '27vw',
  height: '27vw',
  borderRadius: '28px',
  borerColor: 'transparent',
  border: 'none',
  '@media (min-width:850px)': {
    width: '12vw',
    height: '12vw',
  }
}));

function FeedFolderButton({ folder }: any): JSX.Element {
  const [params, setParams] = useRecoilState(feedParametersState);
  const setActiveFolder = useSetRecoilState(activeFolderState);

  const handleClick = () => {
    setParams({
      ...params,
      q: folder.query,
      category: folder.category,
      type: folder.type
    });
    setActiveFolder(folder.label);
  };

  return (
    <FolderButton focusRipple onClick={handleClick}>
      <FolderCard variant="outlined">
        <FolderIcon fontSize="large" sx={{ color: folder.color, fontSize: '2.85rem' }} />
        <Typography style={{fontSize: '0.78rem', fontWeight: 500}}>
          {folder.label}
        </Typography>
      </FolderCard>
    </FolderButton>
  );
}

export default FeedFolderButton;