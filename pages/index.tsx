import { Inter } from 'next/font/google';
import { Button, Htag, P, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

const inter = Inter({ subsets: ['latin'] });

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  // Тест: Первоначальный рейтиг
  const [rating, setRating] = useState<number>(4);

  // Контролируем изменения counter
  useEffect(() => {
    console.log(`Counter: ${counter}`);
  }, [counter]);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Htag tag="h2">rating: {rating}</Htag>
      <Button
        appearance="primary"
        className="my-class"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка 2
      </Button>
      <P size="s">Small</P>
      <P>Medium</P>
      <P size="l">Large</P>

      <Tag>Default tag</Tag>
      <Tag color="ghost">Tag ghost</Tag>
      <Tag color="red">Tag red</Tag>
      <Tag color="green">Tag green</Tag>
      <Tag color="primary">Tag primary</Tag>
      <Tag color="primary" size="s" href="https://test.tst">
        Tag primary size 'small'
      </Tag>
      <Tag color="primary" size="m" href="https://test2.tst">
        Tag primary size 'medium'
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating}></Rating>

      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

// Оборачиваем основной компонент в обертку HOC
export default withLayout(Home);

// Получаем значения для страницы
export const getStaticProps: GetStaticProps = async () => {
  // Задаем категорию для главной страницы
  const firstCategory = 0;

  // Получаем ссылку на домен из переменных окружения
  const domainUrl = process.env.NEXT_PUBLIC_DOMAIN;

  // Используя axios, получим основные категории в data и переименум ее в menu
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/find',
    {
      firstCategory,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  // Возвращаем данные для страницы
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

// Типизируем полученные данные передаче нашей странице Home
// Чтобы withLayout не вызывал ошибка, потому как он является типом Record<string, unknown>, расширим наш интерефейс от него
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
