/**
 * Tag
 *
 * Render:
 * <Tag /> --> <div></div>
 *
 * size? - string: s | m
 * color? - string: ghost | green | grey | primary
 * href? - string
 */

import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', color = 'ghost', href, className, children, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.m]: size == 'm',
        [styles.s]: size == 's',
        [styles.ghost]: color == 'ghost',
        [styles.green]: color == 'green',
        [styles.gray]: color == 'grey',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
