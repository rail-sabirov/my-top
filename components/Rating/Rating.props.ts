import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RaitingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;

  // Поле можно редактировать
  isEditable?: boolean;

  // Функция редактирования рейтинга
  setRating?: (rating: number) => void;
}
