import { ChevronRight } from 'lucide-react';

import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 -z-10' />
        <div className='w-full max-w-screen-2xl px-4 py-12 mx-auto'>
          <h1 className='text-3xl font-bold text-center mb-6'>
            Problem Preparation Platform
          </h1>
          <p className='text-center text-muted-foreground max-w-2xl mx-auto mb-8'>
            Prepare, Manage and Validate programming problems with{' '}
            <span className='text-primary font-semibold'>our </span> comprehensive
            platform
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Polygon Platform</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-muted-foreground'>
                  The mission of Polygon is to provide a platform for creation of
                  programming contest problems. Polygon supports the whole development
                  cycle:
                </p>
                <ul className='space-y-2'>
                  {[
                    'Problem statement writing',
                    'Test data preparing (generators supported)',
                    'Model solutions (including correct and wittingly incorrect)',
                    'Judging',
                    'Automatic validation',
                  ].map((item, index) => (
                    <li key={index} className='flex items-start gap-2'>
                      <ChevronRight className='h-5 w-5 text-primary shrink-0 mt-0.5' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className='space-y-6'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>Platform Statistics</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary'>55,202</p>
                      <p className='text-sm text-muted-foreground'>Registered Users</p>
                    </div>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary'>372,278</p>
                      <p className='text-sm text-muted-foreground'>Total Problems</p>
                    </div>
                    <div className='text-center'>
                      <p className='text-2xl font-bold text-primary'>0</p>
                      <p className='text-sm text-muted-foreground'>Invokers Waiting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-xl'>Latest Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4' data-testid='changelog'>
                    {[
                      {
                        date: '27 Jun 2016',
                        content:
                          'Polygon API has been released. You can view documentation here.',
                      },
                      {
                        date: '7 Dec 2011',
                        content:
                          'Now you may download testlib and polygon documentation from Polygon installation.',
                      },
                      {
                        date: '17 Jul 2010',
                        content: 'Supported contests and PDF-statements.',
                      },
                      {
                        date: '3 Nov 2009',
                        content:
                          'Released new version. Tags and problem filters supported. Also many other smaller fixes done.',
                      },
                      {
                        date: '8 Mar 2009',
                        content:
                          'Use public issue tracker to post bug or feature request.',
                      },
                      {
                        date: '8 Mar 2009',
                        content: 'Beta version has been deployed.',
                      },
                    ].map((update, index) => (
                      <div key={index} className='flex gap-3'>
                        <Badge variant='outline' className='shrink-0 h-fit'>
                          {update.date}
                        </Badge>
                        <p className='text-sm'>{update.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
