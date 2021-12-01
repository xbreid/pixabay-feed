import * as React from 'react';
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import {useRecoilState, useSetRecoilState} from "recoil";
import {activeFolderState, feedPaginationState, feedParametersState} from "../store/atoms";

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
  width: 102,
  height: 102,
  borderRadius: '28px',
  borerColor: 'transparent',
  border: 'none',
  '@media (min-width:850px)': {
    width: 130,
    height: 130,
  },
}));

function FeedFolderButton({ folder }: any): JSX.Element {
  const [params, setParams] = useRecoilState(feedParametersState);
  const setActiveFolder = useSetRecoilState(activeFolderState);
  const [pagination, setPagination] = useRecoilState(feedPaginationState);

  const handleClick = () => {
    setPagination({
      ...pagination,
      page: 1,
    });
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