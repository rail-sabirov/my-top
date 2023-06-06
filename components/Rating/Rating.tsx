import { RaitingProps } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({rating, isEditable = false, setRating, children, ...props}: RaitingProps): JSX.Element => {
    
    const initStarsArray: Array<JSX.Element> = new Array(5).fill(<></>);
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(initStarsArray);

    // Используем constructRating
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    // Функция для отображения "подклашенного" рейтинга
    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((starElement: JSX.Element, starIndex: number) => {
            return (
                <StarIcon 
                    className={cn(styles.star, {
                        [styles.filled]: starIndex < currentRating,
                        [styles.editable]: isEditable
                    })}

                    // Когда курсор мыши находится над звездой
                    onMouseEnter={() => changeDisplay(starIndex + 1)}

                    // Когда мышь уходит из зоны звезды, возвращаем рейтинг
                    onMouseLeave={() => changeDisplay(rating)}
                />
            )
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }

        constructRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((rtng: JSX.Element, index: number) => <span key={index}>{rtng}</span>)}
        </div>
    );
};