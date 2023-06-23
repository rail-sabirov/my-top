import { RaitingProps } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import SvgStarIcon from './star.svg';

export const Rating = ({ rating, isEditable = false, setRating, ...props }: RaitingProps): JSX.Element => {
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
        <span
          className={cn(styles.star, {
            [styles.filled]: starIndex < currentRating,
            [styles.editable]: isEditable,
          })}
          // Когда курсор мыши находится над звездой
          onMouseEnter={() => changeDisplay(starIndex + 1)}
          // Когда мышь уходит из зоны звезды, возвращаем рейтинг
          onMouseLeave={() => changeDisplay(rating)}
          // кликаем и меняем рейтинг
          onClick={() => onClick(starIndex + 1)}
          key={starIndex}
        >
          <SvgStarIcon
            // Перемещение по странице с помощью клавиши tab
            tabIndex={isEditable ? 0 : -1}
            // Задание рейтинга с помощью пробела, когда табом выбрали звезду
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(starIndex + 1, e)}
          />
        </span>
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

  // Функция для клика
  const onClick = (starIndex: number) => {
    // Кроме разрешения на изменение, мы должны проверить
    // отправлена ли функция на изменение рейтинга в атрибуте тега setRating
    if (!isEditable || !setRating) {
      return;
    }

    // Вызывается функция из верхнего уровня (index.jsx там где состояние рейтинга)
    setRating(starIndex);
  };

  // Функция для отработки нажатия пробелом
  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }

    // Задаем рейтинг с помощью функции родительского компонента
    setRating(i);
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
