import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import KeyboardShift from './KeyboardShift';

export default class App extends Component {
  render() {
    return (
      <KeyboardShift>
        {() => (
          <View style={styles.container}>
            <TextInput
              placeholder="A"
              style={styles.textInput}
            />
            <TextInput
              placeholder="B"
              style={styles.textInput}
            />
            <TextInput
              placeholder="C"
              style={styles.textInput}
            />
            <TextInput
              placeholder="D"
              style={styles.textInput}
            />
            <TextInput
              placeholder="E"
              style={styles.textInput}
            />
          </View>
        )}
      </KeyboardShift>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  }
});
