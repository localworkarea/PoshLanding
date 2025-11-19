import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"
import tippy from 'tippy.js';
import "./tooltip.scss"

tippy('[data-tippy-content]', {
  placement: 'bottom',
});