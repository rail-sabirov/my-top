import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { MyComponent } from './MyComponent';
import { Htag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (<>
    <Htag tag='h1'>Text</Htag>
    <Htag tag='h2'>Text</Htag>
    <Htag tag='h3'>Text</Htag>
  </>);
}
