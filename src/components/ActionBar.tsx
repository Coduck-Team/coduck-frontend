'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Send,
  Play,
  Eye,
  GitBranch,
  NotebookPen,
  CheckCheck,
  ListCheck,
  Wrench,
  BookOpenCheck,
  MessageCircleCode,
} from 'lucide-react';

import InfoTooltip from '@/components/InfoTooltip';
import { Button } from '@/components/ui/button';

const items = [
  { icon: FileText, label: 'Information' },
  { icon: NotebookPen, label: 'Statement' },
  { icon: Play, label: 'Test' },
  { icon: CheckCheck, label: 'Checker' },
  { icon: ListCheck, label: 'Validator' },
  { icon: Wrench, label: 'Stress' },
  { icon: BookOpenCheck, label: 'Solutions' },
  { icon: Eye, label: 'Invocations' },
  { icon: MessageCircleCode, label: 'Overview' },
];

export default function ActionBar() {
  const [fixed, setFixed] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFixed(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isTooltipOpen &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTooltipOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 1172);
    };
    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div ref={sentinelRef} className='h-[1px]' />

      {/* consider the header */}
      <div
        className={`z-40 transition-all  ${
          fixed
            ? 'fixed top-0 left-0 w-full shadow-md bg-primary'
            : 'relative bg-primary/90'
        } border-b border-primary/30`}
      >
        <div className='flex justify-center px-4 mx-auto w-full max-w-screen-2xl'>
          <div className='flex items-center justify-between gap-5 py-3 relative'>
            <div className='flex items-center gap-2 pr-6 border-r border-primary-foreground/20 shrink-0'>
              <div className='relative'>
                <Button
                  size='sm'
                  variant='secondary'
                  onMouseEnter={() => setIsTooltipOpen(true)}
                  onMouseLeave={() => setIsTooltipOpen(false)}
                  className='h-8 w-8 p-0 bg-white/90 hover:bg-white text-primary border-0 shadow-sm'
                >
                  <Send className='h-4 w-4' />
                </Button>
                {isTooltipOpen && (
                  <InfoTooltip
                    onMouseEnter={() => setIsTooltipOpen(true)}
                    onMouseLeave={() => setIsTooltipOpen(false)}
                  />
                )}
              </div>

              <Button
                size='sm'
                variant='secondary'
                className='h-8 w-8 p-0 bg-white/90 hover:bg-white text-primary border-0 shadow-sm'
              >
                <GitBranch className='h-4 w-4' />
              </Button>
            </div>

            {/* 메인 네비게이션 아이템들 .. ~  */}
            <div className='flex flex-wrap gap-2 min-w-0'>
              {items.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className='flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 transition-colors text-primary-foreground/80 hover:text-primary-foreground cursor-pointer'
                >
                  <Icon className='h-4 w-4' />
                  {!isCompact && (
                    <span className='text-sm font-medium whitespace-nowrap'>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {fixed && <div className='h-[60px]' />}
    </>
  );
}
