import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function NavCollapse() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="text-white" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="bg-black w-40vw h-full p-6">
          <a href="/" className="block mb-4 text-white">Home</a>
          <a href="/compare" className="block mb-4 text-white">Compare</a>
          <a href="/watchlist" className="block mb-4 text-white">Watchlist</a>
          <a href="/dashboard" className="block mb-4 text-white">Dashboard</a>
          <Switch defaultChecked />
        </div>
      </Drawer>
    </div>
  );
}
