/* Компонент выводит текст, как использовать 

    <MyComponent text='Hello World!'></MyComponent>
*/

import Head from 'next/head';

export const MyComponent = ({ text }: MyProps): JSX.Element => {
  return (
    <div className="myClass">
      <>{text}</>
    </div>
  );
};

export interface MyProps {
  text: string;
}
