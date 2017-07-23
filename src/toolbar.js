import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

export default class Toolbar extends Component {

  onActionSelected (position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

  render() {
    return (
      <ToolbarAndroid
        title="ParityApp"
        actions={[{title: 'Settings', show: 'always'}]}
        onActionSelected={this.onActionSelected} />
    );
  }
}

AppRegistry.registerComponent('app', () => Toolbar);
