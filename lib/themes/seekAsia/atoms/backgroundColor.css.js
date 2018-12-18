import {
  alertBackground,
  completion,
  candidate,
  white,
  grey4,
  blue2,
  blue3,
  blue4,
  blue5,
  callToAction,
  callToActionActive
} from './private/palette';

export default {
  '.input': { background: white },
  '.inputDisabled': { background: grey4 },
  '.formAccent': { background: completion },
  '.formAccentDisabled': { background: grey4 },
  '.selection': { background: blue5 },
  '.info': { background: candidate },
  '.card': { background: white },
  '.critical': { background: alertBackground },
  '.primary': { background: blue2 },
  '.primaryHovered': { background: blue3 },
  '.primaryActive': { background: blue3 },
  '.secondary': { background: blue4 },
  '.secondaryHovered': { background: blue5 },
  '.secondaryActive': { background: blue5 },
  '.callToAction': { background: callToAction },
  '.callToActionHovered': { background: callToActionActive },
  '.callToActionActive': { background: callToActionActive }
};
