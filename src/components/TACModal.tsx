'use client';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '80%', sm: '60%' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TACModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>View Terms and Conditions</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            align='center'
          >
            Terms and Conditions
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <ol className='list-decimal'>
              <li>You can use Polygon to develop problems only.</li>
              <li>
                You should use your real name and all information about you
                should be correct and accurate.
              </li>
              <li>
                You should not submit files containing malicious code:
                <ul className='list-disc list-inside'>
                  <li>trojan horses;</li>
                  <li>rootkits;</li>
                  <li>backdoors;</li>
                  <li>viruses.</li>
                </ul>
              </li>
              <li>
                Your code not allowed to:
                <ul className='list-disc list-inside'>
                  <li>access the network;</li>
                  <li>
                    work with any files except those explicitly specified in the
                    problem statement;
                  </li>
                  <li>attack system security;</li>
                  <li>execute other programs and create new processes;</li>
                  <li>change file system permissions;</li>
                  <li>work with subdirectories;</li>
                  <li>
                    create or manipulate any GUI items (windows, dialog boxes,
                    etc);
                  </li>
                  <li>work with external devices (sound, printer, etc);</li>
                  <li>work with OS registry;</li>
                  <li>do anything else that can stir Polygon functioning.</li>
                </ul>
              </li>
            </ol>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
