webpackHotUpdate(0,{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_Component) {
  _inherits(Tweet, _Component);

  function Tweet(props) {
    _classCallCheck(this, Tweet);

    var _this = _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call(this, props));

    _this.state = {
      likes: 0,
      deleted: false
    };
    return _this;
  }

  _createClass(Tweet, [{
    key: 'likeTweet',
    value: function likeTweet() {
      this.setState({
        likes: this.state.likes + 1
      });
    }
  }, {
    key: 'deleteTweet',
    value: function deleteTweet() {
      this.setState({
        deleted: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.deleted);
      return _react2.default.createElement(
        'div',
        { style: { display: this.deleted ? 'none' : 'block' } },
        _react2.default.createElement(
          'h3',
          null,
          'Author: ',
          this.props.author
        ),
        _react2.default.createElement(
          'p',
          null,
          'Content:  ',
          this.props.content
        ),
        _react2.default.createElement(
          'p',
          null,
          'Likes: ',
          this.state.likes
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.likeTweet.bind(this), id: 'like' },
          'Like'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.deleteTweet.bind(this), id: 'delete' },
          'Delete'
        ),
        _react2.default.createElement('hr', null)
      );
    }
  }]);

  return Tweet;
}(_react.Component);

exports.default = Tweet;

/***/ })

})