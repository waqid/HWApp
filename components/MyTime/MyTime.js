import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';
// let currentTime = new Date();

const MyTime = props => {
  let currentTimeInit = new Date();
  currentTimeInit =
    currentTimeInit.getHours() +
    ':' +
    currentTimeInit.getMinutes() +
    ':' +
    currentTimeInit.getSeconds();

  const [currentTime, setCurrentTime] = useState(currentTimeInit);

  const updateTime = () => {
    let currentTimeUpdated = new Date();
    currentTimeUpdated =
      currentTimeUpdated.getHours() +
      ':' +
      currentTimeUpdated.getMinutes() +
      ':' +
      currentTimeUpdated.getSeconds();
    setCurrentTime(currentTimeUpdated);
  };

  return (
    <View>
      <Text style={(componenStyle.timeContainer, componenStyle.time)}>
        Current time is: {currentTime}
      </Text>
      <Button title={'Update time'} onPress={updateTime} />
    </View>
  );
};

MyTime.propTypes = {
  currentTime: PropTypes.string,
};

const componenStyle = StyleSheet.create({
  time: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default MyTime;
