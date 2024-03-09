import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "./style.css"
import { Navigate } from './Navigate';
import { Report } from './Report';
import { Analyse } from './Analyse';
import { Hotspot } from './Hotspot';

enum Tabs {
  Navigate,
  Report,
  Analyse,
  HotSpot
}

export default function Home() {
  const [value, setValue] = React.useState(Tabs.Report);

  return (
    <Box>
        {value === Tabs.Navigate && <Navigate />}
        {value === Tabs.Report && <Report />}
        {value === Tabs.Analyse && <Analyse />}
        {value === Tabs.HotSpot && <Hotspot />}
        <div className='bottom-nav'>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Navigate" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Report" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Analyse" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Hot Spot" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    </Box>
  );
}