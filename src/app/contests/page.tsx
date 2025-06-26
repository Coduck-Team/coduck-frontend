'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useMemo, useState } from 'react';

import {
  Search,
  Star,
  Plus,
  Calendar,
  User,
  Clock,
  ArrowUpDown,
  Trophy,
  Users,
  FileCode2,
  Settings,
  Trash2,
  Edit,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { DuckCreateButton } from '@/components/duck-create-button';

import contests from '@/data/contests';
import Footer from '@/components/Footer';

type SortKey = 'id' | 'name' | 'owner' | 'modificationTime' | 'creationTime';

export default function ContestsPage() {
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedContests = useMemo(() => {
    return [...contests].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Main Content */}
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
              <Trophy className='h-8 w-8 text-primary' />
              Contests
            </h1>
            <p className='text-gray-600 mt-1'>{contests.length} contests available</p>
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <Checkbox id='favorites' />
                <label
                  htmlFor='favorites'
                  className='text-sm font-medium text-gray-700'
                >
                  Only favorite
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='activity' />
                <label htmlFor='activity' className='text-sm font-medium text-gray-700'>
                  Only my activity
                </label>
              </div>
            </div>
            {/* 예쁜 Create Contest 버튼 */}
            {/* <Button className='bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 h-auto'>
              <Plus className='h-5 w-5 mr-2' />
              <span className='font-semibold'>Create Contest</span>
            </Button> */}
            <DuckCreateButton onClick={() => console.log('Creating new contest!')}>
              Create Contest
            </DuckCreateButton>
          </div>
        </div>

        {/* Contests Table */}
        <div className='bg-white rounded-2xl border border-gray-200/60 shadow-xl shadow-gray-900/5 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60'>
                  <th className='px-6 py-4 text-left'>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                      <span className='text-sm font-semibold text-gray-700'></span>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('id')}
                    >
                      <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                        <span className='text-sm font-semibold text-black-600'>
                          Contest
                        </span>
                        <ArrowUpDown className='h-4 w-4 text-gray-400 group-hover:text-primary' />
                      </div>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('name')}
                    >
                      <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                        {/* <Trophy className='h-4 w-4 text-gray-400' /> */}
                        <span className='text-sm font-semibold text-black-600'>
                          Contest Name
                        </span>
                        <ArrowUpDown className='h-4 w-4 text-gray-400 group-hover:text-primary' />
                      </div>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('owner')}
                    >
                      <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                        {/* <User className='h-4 w-4 text-gray-400' /> */}
                        <span className='text-sm font-semibold text-black-600'>
                          Owner
                        </span>
                        <ArrowUpDown className='h-4 w-4 text-gray-400 group-hover:text-primary' />
                      </div>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('modificationTime')}
                    >
                      <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                        {/* <Clock className='h-4 w-4 text-gray-400' /> */}
                        <span className='text-sm font-semibold text-black-600'>
                          Modification
                        </span>
                        <ArrowUpDown className='h-4 w-4 text-gray-400 group-hover:text-primary' />
                      </div>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('creationTime')}
                    >
                      <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group'>
                        {/* <Calendar className='h-4 w-4 text-gray-400' /> */}
                        <span className='text-sm font-semibold text-black-600'>
                          Creation
                        </span>
                        <ArrowUpDown className='h-4 w-4 text-gray-400 group-hover:text-primary' />
                      </div>
                    </div>
                  </th>
                  <th className='px-6 py-4 text-center'>
                    <span className='text-sm font-semibold text-black-600'>
                      Actions
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {sortedContests.map((contest, index) => (
                  <tr
                    key={contest.id}
                    className={`
                      transition-all duration-200 hover:bg-gradient-to-r hover:from-black-50/50 hover:to-indigo-50/30 hover:shadow-sm
                      ${index % 2 === 1 ? 'bg-gradient-to-r from-purple-50/20 to-pink-50/20' : 'bg-white'}
                    `}
                  >
                    <td className='px-6 py-6'>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-8 w-8 hover:bg-yellow-100 transition-colors'
                      >
                        <Star
                          className={`h-4 w-4 transition-colors ${contest.isFavorite ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                        />
                      </Button>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='font-mono text-sm '>{contest.id}</span>
                    </td>
                    <td className='px-6 py-6'>
                      <div className='space-y-2 max-w-md'>
                        <div className='font-semibold text-gray-900 hover:text-black-600 cursor-pointer transition-colors'>
                          {contest.name}
                        </div>
                        <div className='text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border'>
                          {contest.description}
                        </div>
                        <div className='flex items-center gap-3'>
                          <Badge
                            variant='secondary'
                            className={`text-xs ${
                              contest.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : contest.status === 'upcoming'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {contest.status}
                          </Badge>
                          <div className='flex items-center gap-1 text-xs text-gray-600'>
                            <Users className='h-3 w-3' />
                            <span>{contest.participants} participants</span>
                          </div>
                          <div className='flex items-center gap-1 text-xs text-gray-600'>
                            <FileCode2 className='h-3 w-3' />
                            <span>{contest.problems} problems</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='text-sm'>{contest.owner}</span>
                    </td>
                    <td className='px-6 py-6'>
                      <div className='text-sm'>
                        <div className='font-medium text-gray-900'>
                          {contest.modificationTime.split(' ')[0]}
                        </div>
                        <div className='text-gray-500 text-xs mt-1'>
                          {contest.modificationTime.split(' ')[1]}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-6'>
                      <div className='text-sm'>
                        <div className='font-medium text-gray-900'>
                          {contest.creationTime.split(' ')[0]}
                        </div>
                        <div className='text-gray-500 text-xs mt-1'>
                          {contest.creationTime.split(' ')[1]}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-6'>
                      <div className='flex items-center justify-center gap-3'>
                        <div className='flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'>
                          <Edit className='h-4 w-4 text-gray-600' />
                          <span className='text-xs text-gray-600'>Enter</span>
                        </div>
                        <div className='flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'>
                          <Trash2 className='h-4 w-4 text-gray-600' />
                          <span className='text-xs text-gray-600'>Delete</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 추가 카드 디자인 ... 흠 */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          <div className='bg-white rounded-xl p-6 border border-gray-200/60 shadow-lg'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center'>
                <Trophy className='h-6 w-6 text-white' />
              </div>
              <div>
                <p className='text-2xl font-bold text-gray-900'>3</p>
                <p className='text-sm text-gray-600'>Total Contests</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl p-6 border border-gray-200/60 shadow-lg'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center'>
                <FileCode2 className='h-6 w-6 text-white' />
              </div>
              <div>
                <p className='text-2xl font-bold text-gray-900'>45</p>
                <p className='text-sm text-gray-600'>Total Problems</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl p-6 border border-gray-200/60 shadow-lg'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center'>
                <Users className='h-6 w-6 text-white' />
              </div>
              <div>
                <p className='text-2xl font-bold text-gray-900'>479</p>
                <p className='text-sm text-gray-600'>Total Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
