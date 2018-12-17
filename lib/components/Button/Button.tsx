import React, { Component, ReactNode, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import { ButtonColorVariants } from '../../themes/theme';
import styles from './Button.css';

export interface Props extends WithThemeProps {
  color?: ButtonColorVariants;
  className?: string;
  children: ReactNode;
  disabled?: Boolean;
  compact?: Boolean;
  isSelected?: Boolean;
}

export default withTheme(
  class Button extends Component<Props> {
    static displayName = 'Button';

    render() {
      const {
        theme,
        color,
        className,
        children,
        isSelected,
        disabled,
        compact
      } = this.props;
      return (
        <button
          className={classnames(
            styles.button,
            className,
            theme.atoms.button[color || 'primary'],
            {
              [theme.atoms.button.disabled]: disabled,
              [theme.atoms.button.compact]: compact,
              ['isSelected']: isSelected
            }
          )}
        >
          {children}
        </button>
      );
    }
  }
);
