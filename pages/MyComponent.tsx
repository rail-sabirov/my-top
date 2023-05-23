/* Компонент выводит текст, как использовать 

    <MyComponent text='Hello World!'></MyComponent>
*/

import Head from 'next/head';
import { Children } from 'react';

export const MyComponent = ({ text }: MyProps): JSX.Element => {
  return (
    <div className="myClass">
      <Head>
        <title>MyComponent add new title!!</title>
        <link key={2} rel="icon" href="/RR.ico" />
      </Head>
      <>{text}</>
    </div>
  );
};

export interface MyProps {
  text: string;
}
