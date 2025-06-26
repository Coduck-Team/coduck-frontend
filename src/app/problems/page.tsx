'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Star,
  FileText,
  Settings,
  Download,
  Eye,
  Edit,
  Trash2,
  Play,
  ArrowUpDown,
  FileCode2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Footer from '@/components/Footer';
import ActionBar from '@/components/ActionBar';

import problems from '@/data/problems';
import { DuckCreateButton } from '@/components/duck-create-button';

type SortKey = 'id' | 'name' | 'owner' | 'modified';

export default function ProblemsPage() {
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedProblems = useMemo(() => {
    return [...problems].sort((a, b) => {
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
    <div className='min-h-screen bg-gray-50'>
      <ActionBar />
      {/* Main Content */}
      <div className='container px-4 py-6 mx-auto'>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
              <FileCode2 className='h-8 w-8 text-primary' />
              Problems
            </h1>
            <p className='text-gray-600 mt-1'>{problems.length} problems available</p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox id='favorites' />
              <label htmlFor='favorites' className='text-sm'>
                Only favorite
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='activity' />
              <label htmlFor='activity' className='text-sm'>
                Only my activity
              </label>
            </div>
            <DuckCreateButton onClick={() => console.log('Creating new problem!')}>
              Create Problem
            </DuckCreateButton>
          </div>
        </div>

        {/* Problems Table */}
        <div className='bg-white rounded-lg border shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b'>
                <tr>
                  <th className='px-4 py-3 text-left'>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-primary'>
                      <span className='text-sm font-medium'></span>
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('id')}
                    >
                      <span className='text-sm font-medium'>Id</span>
                      <ArrowUpDown className='h-4 w-4' />
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('name')}
                    >
                      <span className='text-sm font-medium '>Name</span>
                      <ArrowUpDown className='h-4 w-4' />
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('owner')}
                    >
                      <span className='text-sm font-medium'>Owner</span>
                      <ArrowUpDown className='h-4 w-4' />
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-primary'>
                      <span className='text-sm font-medium '>Info</span>
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-primary'>
                      <span className='text-sm font-medium '>Rev.</span>
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <div
                      className='flex items-center gap-2 cursor-pointer hover:text-primary'
                      onClick={() => handleSort('modified')}
                    >
                      <span className='text-sm font-medium '>Modif.</span>
                      <ArrowUpDown className='h-4 w-4' />
                    </div>
                  </th>
                  <th className='px-4 py-3 text-left'>
                    <span className='text-sm font-medium '>Working</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {sortedProblems.map((problem) => (
                  <tr
                    key={problem.id}
                    // className={`hover:bg-gray-50 ${
                    //   /[ *]/.test(problem.revision) ? 'bg-red-50' : ''
                    // }`}
                  >
                    <td className='px-4 py-4'>
                      <Button variant='ghost' size='icon' className='h-6 w-6'>
                        <Star className='h-4 w-4 text-gray-400 hover:text-yellow-500' />
                      </Button>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='font-mono text-sm '>{problem.id}</span>
                    </td>
                    <td className='px-4 py-4'>
                      <div>
                        <div className='font-medium hover:underline cursor-pointer'>
                          {problem.name}
                        </div>
                        {problem.subtitle && (
                          <div className='text-sm text-gray-600 mt-1'>
                            {problem.subtitle}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='text-sm'>{problem.owner}</span>
                    </td>
                    <td className='px-4 py-4'>
                      <div className='text-xs space-y-1'>
                        <div>{problem.info.language}</div>
                        <div>tests({problem.info.tests})</div>
                        <div>
                          {problem.info.timeLimit} / {problem.info.memoryLimit}
                        </div>
                        <div className='text-gray-600'>{problem.info.files}</div>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <span className='font-mono text-sm'>{problem.revision}</span>
                    </td>
                    <td className='px-4 py-4'>
                      <div className='text-xs whitespace-pre-line'>
                        {problem.modified}
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex items-center gap-4'>
                        <div className='flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'>
                          <Edit className='h-4 w-4 text-gray-600' />
                          <span className='text-xs text-gray-600'>edit</span>
                        </div>
                        <div className='flex gap-3'>
                          <div className='flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'>
                            <Trash2 className='h-4 w-4 text-gray-600' />
                            <span className='text-xs text-gray-600'>delete</span>
                          </div>
                          <div className='flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'>
                            <Eye className='h-4 w-4 text-gray-600' />
                            <span className='text-xs text-gray-600'>view</span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
