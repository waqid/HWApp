import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
// import style from '../MyText/style';

const Item = ({style, name, price}) => {
  return (
    <View>
      <Text style={style}>Name: {name}</Text>
      <Text>Price: {price}</Text>
    </View>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
