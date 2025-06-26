'use client';

import type React from 'react';

import { Plus } from 'lucide-react';
import { useState } from 'react';

interface DuckCreateButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function DuckCreateButton({ onClick, children }: DuckCreateButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative group focus:outline-none focus:ring-4 focus:ring-primary/20 rounded-full transition-all duration-300'
    >
      {/* 오리 모양 SVG 버튼 */}
      <svg
        width='120'
        height='80'
        viewBox='0 0 120 80'
        className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      >
        {/* 그림자 */}
        <ellipse
          cx='60'
          cy='75'
          rx='35'
          ry='8'
          fill='rgba(0,0,0,0.1)'
          className={`transition-all duration-300 ${isHovered ? 'opacity-20' : 'opacity-10'}`}
        />

        {/* 몸통 */}
        <ellipse
          cx='60'
          cy='45'
          rx='32'
          ry='25'
          fill='url(#duckGradient)'
          className='transition-all duration-300'
        />

        {/* 머리 */}
        <circle
          cx='45'
          cy='25'
          r='18'
          fill='url(#duckGradient)'
          className='transition-all duration-300'
        />

        {/* 부리 */}
        <ellipse
          cx='30'
          cy='25'
          rx='8'
          ry='4'
          fill='#FF9800'
          className={`transition-all duration-300 ${isHovered ? 'fill-orange-400' : ''}`}
        />

        {/* 눈 */}
        <circle cx='42' cy='20' r='3' fill='white' />
        <circle cx='43' cy='19' r='2' fill='#333' />
        <circle
          cx='44'
          cy='18'
          r='1'
          fill='white'
          className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
        />

        {/* 날개 */}
        <ellipse
          cx='70'
          cy='40'
          rx='12'
          ry='18'
          fill='url(#wingGradient)'
          className='transition-all duration-300'
        />

        {/* 하이라이트 */}
        <ellipse
          cx='50'
          cy='35'
          rx='15'
          ry='12'
          fill='url(#highlightGradient)'
          opacity='0.3'
          className={`transition-all duration-300 ${isHovered ? 'opacity-50' : 'opacity-30'}`}
        />

        {/* 그라데이션 */}
        <defs>
          <linearGradient id='duckGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#FFD54F' />
            <stop offset='50%' stopColor='#FFC107' />
            <stop offset='100%' stopColor='#FF9800' />
          </linearGradient>
          <linearGradient id='wingGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#FFA726' />
            <stop offset='100%' stopColor='#FF9800' />
          </linearGradient>
          <linearGradient id='highlightGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='white' />
            <stop offset='100%' stopColor='rgba(255,255,255,0)' />
          </linearGradient>
        </defs>
      </svg>

      {/* 텍스트 */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex items-center gap-2 text-black font-bold text-sm drop-shadow-lg'>
          <Plus
            className={`h-4 w-4 transition-all duration-300 ${isHovered ? 'rotate-90 scale-110' : ''}`}
          />
          <span className='whitespace-nowrap'>{children}</span>
        </div>
      </div>

      {/* 반짝~ (호버)) */}
      {isHovered && (
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-2 left-8 w-2 h-2 bg-white rounded-full opacity-60 animate-ping'></div>
          <div className='absolute top-4 right-6 w-1 h-1 bg-white rounded-full opacity-80 animate-ping delay-100'></div>
          <div className='absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-ping delay-200'></div>
        </div>
      )}
    </button>
  );
}
