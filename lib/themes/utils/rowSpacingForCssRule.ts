import { CSSProperties } from 'sku/tss-modules';
import mapValues from 'lodash/mapValues';
import { px } from './toUnit';
import { Tokens } from '../theme';

export default (ruleName: keyof CSSProperties, tokens: Tokens) => {
  const { rowHeight, rowSpacing } = tokens;

  const spaceSizing = mapValues(rowSpacing, value => ({
    [ruleName]: px(value * rowHeight)
  }));

  return {
    none: {
      [ruleName]: 0
    },
    ...spaceSizing
  };
};
