import React from 'react';
import Box from '@mui/material/Box';

const FooterComponent = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            padding: 2,
            textAlign: 'center',
        }}>
            <p>This is the footer component.</p>
        </Box>
    );  
};

export default FooterComponent;