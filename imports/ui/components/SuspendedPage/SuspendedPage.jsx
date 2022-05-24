import React, { useState } from 'react';

// material ui core
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SuspendedPage = () => {
  const [open] = useState(true);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="d-flex flex-column align-items-center">
          <div className="p-2">
            Cargando página solicitada...
          </div>
          <div className="p-2">
            <CircularProgress color="inherit" />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default SuspendedPage;
