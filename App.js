/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import PushController from './pushController';
import PushNotification from 'react-native-push-notification';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: false
    }

    this.handleNotify = this.handleNotify.bind(this);
  }

  handleNotify() {
    if (this.state.check === false) {
      this.setState({
        check: true
      })
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (1 * 1000)) // in 60 secs
      });
    }
    else if (this.state.check === true)
      this.setState({
        check: false
      })
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (1 * 1000)) // in 60 secs
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Get Notification' onPress={this.handleNotify} />
        <PushController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {

  }
});
