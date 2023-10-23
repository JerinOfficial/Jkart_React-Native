/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MyDrawer from '../components/MyDrawer';
import {ScrollView} from 'react-native-gesture-handler';
export default function Layout({title, children}) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <Header title={title} open={setisOpen} />
      <ScrollView style={styles.body}>{children}</ScrollView>

      <MyDrawer open={isOpen} close={setisOpen} />
    </>
  );
}
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    width: '100%',
    padding: 5,
    flexWrap: 'wrap',
    gap: 5,
  },
});
