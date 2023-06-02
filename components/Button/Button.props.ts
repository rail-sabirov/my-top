import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';

    // Параметр для стрелки, принимает три значения и ?-будет не обязательным
    arrow?: 'right' | 'down' | 'none';
}