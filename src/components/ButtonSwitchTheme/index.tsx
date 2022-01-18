/* eslint-disable prettier/prettier */
import React from 'react';

import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import useAppTheme from 'contexts/theme';

const style = { width: 35, height: 35 };

export const ButtonSwitchTheme = () => {
  const { toggleTheme, currentTheme } = useAppTheme();

  return (
    <Tooltip title={currentTheme} arrow>
      <Button color="inherit" onClick={() => toggleTheme()}>
        {currentTheme === 'dark' ? (
          <DarkModeTwoToneIcon fontSize="large" style={style} />
        ) : (
          <WbSunnyTwoToneIcon fontSize="large" style={style} />
        )}
      </Button>
    </Tooltip>
  );
};
