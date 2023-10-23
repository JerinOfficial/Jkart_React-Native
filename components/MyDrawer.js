/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const MyDrawer = ({open, close}) => {
  const [active, setActive] = React.useState('');
  const handleClose = () => {
    close(false);
  };
  return (
    <Modal
      style={{position: 'relative', margin: 0}}
      isVisible={open}
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      onBackButtonPress={handleClose}>
      <View style={styles.drawer}>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold'}}>Login & Signup</Text>
        </View>
        <TouchableOpacity
          style={active === 'first' ? styles.activeItem : styles.drawerItem}
          onPress={() => {
            setActive('first');
            close(false);
          }}>
          <Text style={styles.text}>First Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={active === 'second' ? styles.activeItem : styles.drawerItem}
          onPress={() => {
            setActive('second');
            close(false);
          }}>
          <Text style={styles.text}>Second Item</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'rgba(40,116,240,1.00)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: '#eee',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 270,
    height: '100%',
    backgroundColor: 'white',
    elevation: 3,
  },
  drawerItem: {
    padding: 16,
  },
  activeItem: {
    padding: 16,
    backgroundColor: '#eee',
  },
  text: {
    color: 'black',
  },
});

export default MyDrawer;
