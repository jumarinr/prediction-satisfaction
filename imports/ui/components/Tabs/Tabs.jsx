import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import TabsMaterial from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import styles from './styles.jsx';

const Tabs = ({ value, handleChange, tabs }) => {
  const classes = styles();
  return (
    <Box sx={{ ...classes.box }}>
      <TabsMaterial value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab
            label={tab.description}
            key={tab.value}
            value={tab.value}
          />
        ))}
      </TabsMaterial>
    </Box>
  );
};

Tabs.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
