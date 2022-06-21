import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { positions } from '@mui/system';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Alerts({ message }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    return (
    <div className='absolute top-12'>
            <Stack spacing={2} sx={{ width: '100%' }}  >

<Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
    </Alert>
</Snackbar>

</Stack>
    </div>
    );
}