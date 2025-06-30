'use client';

import Link from 'next/link';
import { User } from 'lucide-react';

import LoginSubmitBox from './SubmitBox';

import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function Login() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex items-center justify-center px-4 py-20'>
        <Card className='w-full max-w-md'>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle className='flex flex-col items-center gap-2'>
              <User className='h-6 w-6 text-primary' />
              <span>Login</span>
            </CardTitle>
          </CardHeader>
          <LoginSubmitBox>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='yourID@example.com'
                  autoComplete='email'
                  required
                />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  autoComplete='current-password'
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='remember' />
                  <Label
                    htmlFor='remember'
                    className='text-sm font-normal text-muted-foreground'
                  >
                    Remember me
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col space-y-4'>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <div className='flex justify-between w-full text-sm text-muted-foreground'>
                <Link href='/forgot-password' className='hover:underline'>
                  Forgot password?
                </Link>
                <div>
                  Don&apos;t have an account?{' '}
                  <Link href='/register' className='text-primary hover:underline'>
                    Sign Up
                  </Link>
                </div>
              </div>
            </CardFooter>
          </LoginSubmitBox>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
