import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoaderSpinner() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', maxHeight: '50%' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}