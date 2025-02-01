import {
  photosArray
} from './createPhotoArray.js';

import {
  renderMiniatures
} from './renderMiniatures.js';

import {
  initUploadModal
} from './form.js';

import {
  pristine,
  isHashtagsInputTextValid,
  isCommentInputTextValid,
  getErrorMessage,
  hashtagInput,
  messageTextarea
} from './form-validator.js';

import {
  smallerScaleButton,
  biggerScaleButton,
  onSmallerButtonClick,
  onBiggerButtonClick
} from './scale-photo.js';

import {
  onListItemChange
} from './effect-photo-editor.js';

const effectsList = document.querySelector('.effects__list');

renderMiniatures (photosArray);
initUploadModal();

pristine.addValidator(hashtagInput, isHashtagsInputTextValid, getErrorMessage);
pristine.addValidator(messageTextarea, isCommentInputTextValid, getErrorMessage);

effectsList.addEventListener ('change', onListItemChange);
smallerScaleButton.addEventListener('click', onSmallerButtonClick);
biggerScaleButton.addEventListener('click', onBiggerButtonClick);

