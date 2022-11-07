import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIAccountErrModal() {
    const { auth } = useContext(AuthContext);

    return (
        <Modal
            open={auth.accountModal}
        >
            <Alert severity="error" onClose={() => {auth.hideModals()}}>
                Error: {auth.errorMessage}
            </Alert>
        </Modal>
    );
}
