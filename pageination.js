'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageination = require('./pageination.vue');

var _pageination2 = _interopRequireDefault(_pageination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.component(_pageination2.default.name, _pageination2.default);
  }
};
