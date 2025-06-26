'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import infoTooltip from '@/data/infotooltip';

export default function InfoTooltip({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className='absolute left-0 top-full bg-white mt-1 text-black border rounded-lg shadow-lg p-4 text-sm w-[280px]'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        boxShadow:
          '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className='absolute top-[-8px] left-0 w-full h-8'
        style={{
          backgroundColor: 'transparent',
          pointerEvents: 'auto',
        }}
      />
      <div className='space-y-3'>
        <div className='flex items-center gap-2 pb-2 border-b border-gray-100'>
          <Send className='h-4 w-4 text-primary' />
          <span className='font-semibold text-gray-900'>Information Details</span>
        </div>

        <div className='space-y-2'>
          <div>
            <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>
              Problem
            </span>
            <p className='font-medium text-gray-900'>{infoTooltip.problem}</p>
          </div>
          <div>
            <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>
              Contest
            </span>
            <p>
              <Link
                href={`/contests/${encodeURIComponent(infoTooltip.contest)}`}
                className='text-primary hover:text-primary/80 font-medium hover:underline transition-colors'
              >
                {infoTooltip.contest}
              </Link>
            </p>
          </div>
          <div>
            <span className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block'>
              Groups
            </span>
            <div className='flex flex-wrap gap-1'>
              {infoTooltip.groups.map((group) => (
                <Link key={group} href={`/problems/${encodeURIComponent(group)}`}>
                  <Badge
                    variant='secondary'
                    className='text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer'
                  >
                    {group}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-3 border-t border-gray-100'>
          <div className='flex flex-col gap-2'>
            {infoTooltip.actions.map((action) => (
              <Button
                key={action}
                size='sm'
                className='justify-center h-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm'
              >
                {action}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
