"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var babel = require('react-live-editor/node_modules/babel-core');

// These do not use ES6 imports, because the evaluated code requires un-mangled
// variable names.
const { Badge } = require('../../src/Badge')
const Button = require('../../src/Button').Button
const ButtonGroup = require('../../src/ButtonGroup').ButtonGroup
const { Calendar, CalendarHeaderControl, CalendarDays, CalendarDayLabels } = require('../../src/Calendar')
const Nav = require('../../src/Nav').Nav
const NavContent = require('../../src/NavContent').NavContent
const NavItem = require('../../src/NavItem').NavItem
const Tabs = require('../../src/Tabs').Tabs
const Tab = require('../../src/Tab').Tab
const { Toggle } = require('../../src/Toggle')
const { Tree, TreeItem, DataTree, DataTreeItem } = require('../../src/Tree')

var selfCleaningTimeout = {
  componentDidUpdate: function componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  setTimeout: function (_setTimeout) {
    function setTimeout() {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function () {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  })
};

var ComponentPreview = React.createClass({
  displayName: "ComponentPreview",

  propTypes: {
    code: React.PropTypes.string.isRequired
  },

  mixins: [selfCleaningTimeout],

  render: function render() {
    return React.createElement("div", { ref: "mount" });
  },

  componentDidMount: function componentDidMount() {
    this.executeCode();
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  },

  compileCode: function compileCode() {
    return babel.transform(this.props.code, { presets: [
      require('react-live-editor/node_modules/babel-preset-es2015'), 
      require('react-live-editor/node_modules/babel-preset-react')
  ]
    }).code;
  },

  executeCode: function executeCode() {
    var mountNode = this.refs.mount;

    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {}

    try {
      var compiledCode = this.compileCode();
      ReactDOM.render(eval(compiledCode), mountNode);
    } catch (err) {
      this.setTimeout(function () {
        ReactDOM.render(React.createElement("div", { className: "playgroundError" }, err.toString()), mountNode);
      }, 500);
    }
  }
});

module.exports = ComponentPreview;