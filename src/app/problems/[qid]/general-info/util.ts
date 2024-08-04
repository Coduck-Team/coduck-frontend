import { Dispatch, MouseEvent, SetStateAction } from 'react';

export const removeChip = (event: MouseEvent<HTMLElement, MouseEvent>, setHook: Dispatch<SetStateAction<string[]>>) => {
    if (event.currentTarget.tagName === 'PATH') {
        console.info('Path');
        return;
    }
    
    const contest = event.currentTarget.parentNode?.firstElementChild?.textContent;
    if (!contest) {
        return;
    }
    setHook((contests) => contests.filter((c) => c !== contest));
};