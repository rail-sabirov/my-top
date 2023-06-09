import { RaitingProps } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import SvgStarIcon from './star.svg';

export const Rating = ({
  rating,
  isEditable = false,
  setRating,
  children,
  ...props
}: RaitingProps): JSX.Element => {
  // Инициализируемый массив звезд из пяти пустых тегов
  const initStarsArray: Array<JSX.Element> = new Array(5).fill(<></>);
  // Состояние рейтинга / звезд
  const [starsArray, setStarsArray] = useState<JSX.Element[]>(initStarsArray);

  // При каждом изменении рейтинга реагируем, подкрашивая звезды
  useEffect(() => {
    generateStarsLayout(rating);
  }, [rating]);

  // Функция для отображения "подкрашенного" рейтинга
  const generateStarsLayout = (currentRating: number) => {
    // Перебераем каждую звездочку и генерим SVG элемент с подкрашиванием
    const updatedArray = starsArray.map((starElement: JSX.Element, starIndex: number) => {
      return (
        <SvgStarIcon
          className={cn(styles.star, {
            [styles.filled]: starIndex < currentRating,
            [styles.editable]: isEditable,
          })}
          // Когда курсор мыши находится над звездой
          onMouseEnter={() => changeDisplay(starIndex + 1)}
          // Когда мышь уходит из зоны звезды, возвращаем рейтинг
          onMouseLeave={() => changeDisplay(rating)}
        />
      );
    });

    // Задаем новый массив со звездами
    setStarsArray(updatedArray);
  };

  // функция обертка для генератора звезд, при условии, если их можно менять
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    generateStarsLayout(i);
  };

  // Возвращаем результат работы компонента
  return (
    <div {...props}>
      {starsArray.map((rtng: JSX.Element, index: number) => (
        <span key={index}>{rtng}</span>
      ))}
    </div>
  );
};
