import { Inter } from 'next/font/google';
import './../globals.css';
import SearchHeader from '@/components/SearchHeader';

export const metadata = {
  title: 'Google Clone Next 13',
  description: 'Google Clone created by Next 13',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
