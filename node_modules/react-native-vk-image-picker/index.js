'use strict'

const { NativeModules } = require('react-native');
const { ImagePickerManager } = NativeModules;
const DEFAULT_OPTIONS = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '相册',
  quality: 1.0,
  allowsEditing: false
};

module.exports = {
  ...ImagePickerManager,
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if(!ImagePickerManager){
      return;
    }
    return ImagePickerManager.showImagePicker({...DEFAULT_OPTIONS, ...options}, callback)
  }
}
