import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { format } from 'date-fns';

import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Top © 2020 - {format(new Date(), 'yyyy')} All rights reserved</div>
      <a href="#" target='blank'>Terms of use</a>
      <a href="" target='blank'>Privacy Policy</a>
    </footer>
  );
};
