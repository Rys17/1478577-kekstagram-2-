import { SCALE_STEP } from './data.js';
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadContainer = imgUploadOverlay.querySelector('.img-upload__preview-container');
const scaleControl = imgUploadContainer.querySelector('.scale__control--value');
const smallerScaleButton = imgUploadContainer.querySelector('.scale__control--smaller');
const biggerScaleButton = imgUploadContainer.querySelector('.scale__control--bigger');
const previewPictures = imgUploadOverlay.querySelector('.img-upload__preview img');
let scale = 1;

const onSmallerButtonClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    previewPictures.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerButtonClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    previewPictures.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

export {
  smallerScaleButton,
  biggerScaleButton,
  onSmallerButtonClick,
  onBiggerButtonClick
};
