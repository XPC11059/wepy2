"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _x = require('../../vendor.js')(4);

var _store = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {},
  mixins: [],
  data: {
    background: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572953653379&di=9ce40ace07ab414200c61d7d5bea9ce5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0157595c565c0ba801203d2281f979.jpg%401280w_1l_2o_100sh.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1009975729,3193095646&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572953346247&di=1fff8197cd775f1109ccb0627c9420e4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f49a5860f6a1a801219c77e46072.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  computed: {},
  methods: {},
  created: function created() {}
}, {info: {"components":{"panel":{"path":"..\\..\\components\\panel"},"counter":{"path":"..\\..\\components\\counter"},"slide-view":{"path":"..\\..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"panel":{"path":"..\\..\\components\\panel"},"counter":{"path":"..\\..\\components\\counter"},"slide-view":{"path":"..\\..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {}, models: {} });