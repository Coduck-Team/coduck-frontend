'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className='bg-white border-b'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-screen-2xl px-6 flex items-center justify-between h-16 gap-8'>
          <div className='flex items-left gap-2'>
            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='left' className='flex flex-col'>
                  <div className='py-4'>
                    <h2 className='text-lg font-semibold mb-4'>Menu</h2>
                    <div className='relative mb-6'>
                      <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4' />
                      <Input
                        type='search'
                        placeholder='Search ...'
                        className='pl-10 w-full'
                      />
                    </div>
                    <nav className='flex flex-col space-y-4'>
                      <Link
                        href='/problems'
                        className='flex items-center py-2 px-3 rounded-md hover:bg-secondary transition-colors'
                      >
                        Problems
                      </Link>
                      <Link
                        href='/contests'
                        className='flex items-center py-2 px-3 rounded-md hover:bg-secondary transition-colors'
                      >
                        Contests
                      </Link>
                      <Link
                        href='/groups'
                        className='flex items-center py-2 px-3 rounded-md hover:bg-secondary transition-colors'
                      >
                        Contest Groups
                      </Link>
                    </nav>
                  </div>
                  <div className='border-t pt-4 mt-auto'>
                    <div className='flex flex-col space-y-2'>
                      <Button
                        variant='outline'
                        asChild
                        className='w-full justify-center'
                      >
                        <Link href='/login'>Login</Link>
                      </Button>
                      <Button asChild className='w-full justify-center'>
                        <Link href='/register'>Register</Link>
                      </Button>
                      <Button variant='ghost' asChild className='w-full justify-center'>
                        <Link href='/help'>Help</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo + Title */}
            <Link href='/' className='flex items-center gap-2 shrink-0'>
              <Image src='/logo.png' alt='Coduck Logo' width={40} height={40} />
              <span className='text-duckbrown text-2xl font-bold font-logo mr-4 hover:text-primary transition-colors duration-200'>
                coduck
              </span>
            </Link>
          </div>

          {/* Search bar */}
          <div className='hidden md:block relative flex-grow max-w-xl'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4' />
            <Input type='search' placeholder='Search ...' className='pl-10 w-full' />
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/problems'
              className='font-medium hover:text-primary transition-colors'
            >
              Problems
            </Link>
            <Link
              href='/contests'
              className='font-medium hover:text-primary transition-colors'
            >
              Contests
            </Link>
            <Link
              href='/groups'
              className='font-medium hover:text-primary transition-colors'
            >
              Contest Groups
            </Link>
          </nav>

          {/* Login, Register, Help */}
          <div className='hidden md:flex items-center gap-2'>
            <Button variant='outline' size='sm' asChild>
              <Link href='/login'>Login</Link>
            </Button>
            <Button size='sm' asChild>
              <Link href='/register'>Register</Link>
            </Button>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/help'>Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
