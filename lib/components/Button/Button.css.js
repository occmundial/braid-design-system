export default {
  '.button': {
    display: 'inline-block',
    lineHeight: 1.5,
    textDecoration: 'none',
    userSelect: 'none',
    textAlign: 'center',
    border: '1px solid transparent',
    borderRadius: '5px',
    transition:
      'backgroundColor 0.2s, transform 0.2s cubicBezier(0.02, 1.505, 0.745, 1.235)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    '&:hover, &:focus': {
      boxShadow: '0 0 2px 2px rgba(0,0,0,0.05)'
    }
  },
  '.text': {
    display: 'inline'
  }
};
