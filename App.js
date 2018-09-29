import React from 'react';
import { Dimensions, Keyboard, StyleSheet, TextInput, UIManager, View } from 'react-native';

const { State: TextInputState } = TextInput;

export default class App extends React.Component {
  state = {
    shift: 0,
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  render() {
    const { shift } = this.state;
    return (
      <View style={[styles.container, { top: shift }]}>
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
    );
  }

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      this.setState({
        shift: gap,
      })
    });
  }

  handleKeyboardDidHide = () => {
    this.setState({
      shift: 0,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCCCCC',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 40,
  }
});
