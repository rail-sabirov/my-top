// Наша структура для получаемого меню в формате JSON из адреса:
// POST https://courses-top.ru/api/top-page/find передав в тело JSON: { firstCategory: 0 }
// Преобразовать JSON в структуру TS, автоматически, можно на сайте https://transform.tools/json-to-typescript
// и мы получим интерфейсы для разбора JSON

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
}
