import {
  blue4,
  blue5,
  blue3,
  blue2,
  callToAction,
  callToActionActive,
  white,
  grey4
} from './private/palette';

export default {
  '.secondary': {
    background: blue4,
    borderColor: blue3,
    color: blue2,
    '&:hover': {
      background: blue5,
      borderColor: blue5
    },
    '&:focus': {
      boxShadow: `0 0 2px 2px ${blue3}`
    }
  },
  '.primary': {
    background: blue2,
    color: white,
    '&:hover': {
      background: blue3,
      borderColor: blue3
    },
    '&:focus': {
      boxShadow: `0 0 2px 2px ${blue3}`
    }
  },
  '.callToAction': {
    color: white,
    background: callToAction,
    '&:focus': {
      backgroundColor: callToActionActive,
      color: 'white'
    }
  },
  '.hyperlink': {
    color: blue2,
    background: 'transparent',
    '.disabled': {
      background: 'transparent',
      color: grey4,
      cursor: 'not-allowed',
      textDecoration: 'underline'
    }
  },
  '.compact': {
    lineHeight: 1.5
  },
  '.disabled': {
    backgroundColor: grey4,
    cursor: 'not-allowed'
  }
};
