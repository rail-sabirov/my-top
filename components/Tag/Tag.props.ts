import { DetailedHTMLProps, HTMLAttributes, HTMLDivElement, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'm' | 's';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;

    children: ReactNode;

}