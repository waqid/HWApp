import React, {useState} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});
  return (
    <SafeAreaView>
      {/* <Text>a</Text> */}
      {/* <Image
        source={require('./assets/images/cake.png')}
        style={{width: 100, height: 100}}
        resizeMode={'contain'}
      /> */}
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        resizeMode={'center'}
        onError={() => {
          console.log('Error has been encountered while loading an image');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />
      {/* <Image
        source={require('./assets/images/cake.png')}
        style={{width: 100, height: 100}}
      />
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        resizeMode={'repeat'}
      /> */}
    </SafeAreaView>
  );
};

export default App;
