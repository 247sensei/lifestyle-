import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button icon="camera" mode="contained" onPress={() => console.Console.log('Pressed')}>
    Press me
  </Button>
);

export default MyComponent; 