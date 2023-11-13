/* eslint-disable prettier/prettier */

import React from 'react';
import {
  Text,
  Pressable,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Layout from '../layout/Layout';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export default function AddToCart() {
  return (
    <Layout title={'Cart'}>
      <View style={style.cart}>
        <View>
          {/* <Image /> */}
          <Text>Add To Cart</Text>
        </View>
        <View style={style.btnContainer}>
          <Button
            // style={style.btn}
            // labelStyle={{fontSize: 10, lineHeight: 9}}
            mode="outlined">
            Buy
          </Button>
          <Button
            // labelStyle={{fontSize: 10, lineHeight: 11}}
            textColor="white"
            mode="contained"
            style={style.dltBtn}>
            Remove
          </Button>
        </View>
      </View>
    </Layout>
  );
}

const style = StyleSheet.create({
  cart: {
    width: width - 10,
    elevation: 6,
    backgroundColor: 'gray',
    shadowOpacity: 5,
    shadowColor: 'black',
    shadowRadius: 5,
    padding: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  btnContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dltBtn: {
    // height: 30,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    backgroundColor: 'red',
  },
});
