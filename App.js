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
import PushNotification from 'react-native-push-notification';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: ''
    }

    this.handleNotify = this.handleNotify.bind(this);
  }

  handleNotify() {

    var PushNotification = require('react-native-push-notification');

    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
    })

    if (this.state.check === false) {
      this.setState({
        check: true
      })
      PushNotification.localNotificationSchedule({
        message: "Notification", // (required)
        date: new Date(Date.now() + (1 * 1000)) // in 60 secs
      });
    }
    else if (this.state.check === true)
      this.setState({
        check: false
      })
    PushNotification.localNotificationSchedule({
      message: "Notification", // (required)
      date: new Date(Date.now() + (1 * 1000)) // in 60 secs
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Get Notification' onPress={this.handleNotify} />
        {/* <PushController /> */}
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
