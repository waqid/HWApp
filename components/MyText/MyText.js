import React from 'react';
import {Text, StyleSheet} from 'react-native';
// import style from './style';

const MyText = () => {
  const handleAlert = () => {
    alert('You just pressed the text component');
  };
  return (
    <Text
      style={(styles.titleText, {color: 'blue', padding: 30})}
      onPress={() => handleAlert()}>
      Hello, Waqid here from props!
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'aquamarine',
  },
});

export default MyText;
