import { Inter } from 'next/font/google';
import { Button, Htag, P, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  // Контролируем изменения counter
  useEffect(() => {
    console.log(`Counter: ${counter}`);
  }, [counter]);

  return (<>
    <Htag tag='h1'>{counter}</Htag>
    <Button appearance='primary' 
      className='my-class' 
      arrow='right'
      onClick={() => setCounter(x => x + 1)}
      >Кнопка</Button>
    <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
    <P size='s'>Small</P>
    <P>Medium</P>
    <P size='l'>Large</P>

    <Tag>Default tag</Tag>
    <Tag color="ghost">Tag ghost</Tag>
    <Tag color='red'>Tag red</Tag>
    <Tag color='green'>Tag green</Tag>
    <Tag color='primary'>Tag primary</Tag>
    <Tag color="primary" size='s' href="https://test.tst">Tag primary size 'small'</Tag>
    <Tag color="primary" size='m' href="https://test2.tst">Tag primary size 'medium'</Tag>

    <Rating rating={3} isEditable></Rating>
  </>);
}

