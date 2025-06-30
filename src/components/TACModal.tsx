'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function TACModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant='link' onClick={handleOpen}>
        VIEW
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-xl'>
          <DialogHeader>
            <DialogTitle className='text-center'>Terms and Conditions</DialogTitle>
          </DialogHeader>
          <div className='space-y-4 text-sm text-muted-foreground mt-2 max-h-[70vh] overflow-y-auto'>
            <ol className='list-decimal list-inside space-y-2'>
              <li>You can use Polygon to develop problems only.</li>
              <li>
                You should use your real name and all information about you should be
                correct and accurate.
              </li>
              <li>
                You should not submit files containing malicious code:
                <ul className='list-disc list-inside ml-6'>
                  <li>trojan horses</li>
                  <li>rootkits</li>
                  <li>backdoors</li>
                  <li>viruses</li>
                </ul>
              </li>
              <li>
                Your code is not allowed to:
                <ul className='list-disc list-inside ml-6'>
                  <li>access the network</li>
                  <li>
                    work with any files except those explicitly specified in the problem
                    statement
                  </li>
                  <li>attack system security</li>
                  <li>execute other programs and create new processes</li>
                  <li>change file system permissions</li>
                  <li>work with subdirectories</li>
                  <li>
                    create or manipulate any GUI items (windows, dialog boxes, etc)
                  </li>
                  <li>work with external devices (sound, printer, etc)</li>
                  <li>work with OS registry</li>
                  <li>do anything else that can stir Polygon functioning</li>
                </ul>
              </li>
            </ol>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
