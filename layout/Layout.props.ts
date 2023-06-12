import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

// Layout будет оборачивать принятый компонент с помощью тега div,
// по этому у него есть children но нет extends, это компонент высшего порядка
export interface LayoutProps {
  children: ReactNode;
}
