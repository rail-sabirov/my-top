import { RaitingProps } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({rating, isEditable = false, setRating, children, ...props}: RaitingProps): JSX.Element => {
    
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    // Используем constructRating
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    
    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}
                />
            )
        });

        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((rtng: JSX.Element, index: number) => <span key={index}>{rtng}</span>)}
        </div>
    );
};