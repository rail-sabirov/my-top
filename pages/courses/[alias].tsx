import { MenuItem } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import axios from 'axios';
import { TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';

const firstCategory = 0;
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN;

// Получим данные для генерации страницы курсов
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  // Если не передали параметры то мы возвращаем статус 404
  if (!params) {
    return { notFound: true };
  }

  // Получаем меню страницы
  const { data: menu } = await axios.post<MenuItem[]>(domainUrl + '/api/top-page/find', {
    firstCategory,
  });

  // Получаем страницу
  const { data: page } = await axios.get<TopPageModel>(domainUrl + '/api/top-page/byAlias/' + params.alias);

  // Получаем Продукты
  const { data: products } = await axios.post<ProductModel[]>(domainUrl + '/api/product/find', {
    category: page.category,
    limit: 10,
  });

  // Возвращаем все данные для посторенния страницы
  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

// Чтобы NextJS знал какие пути зарезервировать при рендеринге на сервере
export const getStaticPaths: GetStaticPaths = async () => {
  // Получаем меню страницы
  const { data: menu } = await axios.post<MenuItem[]>(domainUrl + '/api/top-page/find', {
    firstCategory,
  });

  // Возвращаем все пути которые прописаны в меню
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => '/courses/' + p.alias)),
    fallback: true,
  };
};

// Для правильного получения данных из JSON
interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

// Компонент страницы
function Course({ products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

// Обернем страницу нашим шаблоном
export default withLayout(Course);
