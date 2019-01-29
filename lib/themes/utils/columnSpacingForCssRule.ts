import { CSSProperties } from 'sku/tss-modules';
import mapValues from 'lodash/mapValues';
import { px } from './toUnit';
import { Tokens } from '../theme';

export default (ruleName: keyof CSSProperties, tokens: Tokens) => {
  const { columnWidth, columnSpacing } = tokens;

  const spaceSizing = mapValues(columnSpacing, value => ({
    [ruleName]: px(value * columnWidth)
  }));

  return {
    none: {
      [ruleName]: 0
    },
    ...spaceSizing
  };
};
