import { Inter } from 'next/font/google';
import { Button, Htag, P } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (<>
    <Htag tag='h1'>Text</Htag>
    <Button appearance='primary' className='my-class' arrow='right'>Кнопка</Button>
    <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
    <P size='s'>Small</P>
    <P>Medium</P>
    <P size='l'>Large</P>
  </>);
}
