import Popup from './Popup.js';
import { imageModal, imageModalTitle } from '../utils/constants.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(element) {
    super.open()
    imageModal.src = element.link;
    imageModal.alt = element.name;
    imageModalTitle.textContent = element.name;
  };
};
