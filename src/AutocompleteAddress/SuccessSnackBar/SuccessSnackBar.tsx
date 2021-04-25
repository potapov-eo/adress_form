import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={15} variant="filled" {...props} />;
}

export function SuccessSnackBar(props:{text: string}) {
    const [isOpen, setIsOpen] =useState<boolean>(true)

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                {props.text}
            </Alert>
        </Snackbar>
    );
}