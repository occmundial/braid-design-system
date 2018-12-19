import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import styles from './Button.css.js';
import Box from '../Box/Box';
import Text from '../Text/Text';

export type ButtonBackgroundVarients = 'primary' | 'secondary' | 'callToAction';
export const DEFAULT_BUTTON_BACKGROUND = 'primary';

export interface Props extends WithThemeProps {
  color?: ButtonBackgroundVarients;
  className?: string;
  children: ReactNode;
  disabled?: Boolean;
  compact?: Boolean;
  isSelected?: Boolean;
  hovered?: Boolean;
}

export const getBoxColor = (
  color: String,
  isSelected?: Boolean,
  hovered?: Boolean
) => {
  let boxColor = color;
  if (isSelected) {
    boxColor += 'Active';
  } else if (hovered) {
    boxColor += 'Hovered';
  }
  return boxColor;
};

export default withTheme(
  class Button extends Component<Props> {
    static displayName = 'Button';

    constructor(props) {
      super(props);

      this.state = {
        hovered: false
      };

      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
      this.setState({ hovered: true });
    }

    handleMouseOut() {
      this.setState({ hovered: false });
    }

    render() {
      const {
        theme,
        color = DEFAULT_BUTTON_BACKGROUND,
        className,
        children,
        isSelected,
        disabled,
        compact
      } = this.props;

      const hovered = this.props.hovered || this.state.hovered;

      const horizontalBoxPadding = compact ? 'xsmall' : 'small';
      const verticalBoxPadding = compact && 'xxsmall';
      const buttonColor = getBoxColor(color, isSelected, hovered);

      return (
        <Box
          component="button"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          paddingLeft={horizontalBoxPadding}
          paddingRight={horizontalBoxPadding}
          paddingTop={verticalBoxPadding}
          paddingBottom={verticalBoxPadding}
          backgroundColor={disabled ? 'inputDisabled' : buttonColor}
          className={classnames(
            styles.button,
            theme.atoms.transition.fast,
            theme.atoms.borderRadius.standard,
            theme.atoms.borderWidth.standard,
            className,
            {
              [theme.atoms.boxShadow.button]: hovered && !disabled,
              ['isSelected']: isSelected
            }
          )}
        >
          <Text
            component="span"
            color={color === 'secondary' ? 'formAccent' : 'white'}
            className={styles.text}
            size={compact ? 'small' : 'interaction'}
            baseline={false}
          >
            {children}
          </Text>
        </Box>
      );
    }
  }
);
