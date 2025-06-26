'use client';

import Link from 'next/link';
import { UserPlus } from 'lucide-react';
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
import RegisterSubmitBox from './SubmitBox';
import TACModal from '@/components/TACModal';

export default function Register() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <main className='flex items-center justify-center px-4 py-12'>
        <Card className='w-full max-w-md'>
          <CardHeader className='flex flex-col items-center gap-2'>
            <UserPlus className='h-6 w-6 text-primary' />
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <RegisterSubmitBox>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  id='firstName'
                  name='firstName'
                  autoComplete='given-name'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  id='lastName'
                  name='lastName'
                  autoComplete='family-name'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input id='email' name='email' autoComplete='email' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' name='username' autoComplete='username' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='new-password'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  autoComplete='new-password'
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='agreeTAC' />
                  <Label
                    htmlFor='agreeTAC'
                    className='text-sm font-normal text-muted-foreground'
                  >
                    I agree to the terms and conditions
                  </Label>
                </div>
                <TACModal />
              </div>
            </CardContent>
            <CardFooter className='flex flex-col space-y-4'>
              <Button type='submit' className='w-full'>
                Register
              </Button>
              <div className='w-full text-right text-sm text-muted-foreground'>
                Already have an account?{' '}
                <Link href='/login' className='text-primary hover:underline'>
                  Login
                </Link>
              </div>
            </CardFooter>
          </RegisterSubmitBox>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
