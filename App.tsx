import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Navigator from './navigations';

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
