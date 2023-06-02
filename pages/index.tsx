import { Inter } from 'next/font/google';
import { Button, Htag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (<>
    <Htag tag='h1'>Text</Htag>
    <Button appearance='primary' className='my-class' arrow='right'>Кнопка</Button>
    <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
  </>);
}
