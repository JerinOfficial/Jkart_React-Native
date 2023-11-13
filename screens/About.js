/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import Layout from '../layout/Layout';
import {View, Text, Image} from 'react-native';
import {styles} from './Home';
import {getAllProducts} from '../actions/api';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function About({route, ...props}) {
  const {id} = route.params;
  const [products, setproducts] = useState([]);
  const get = async () => {
    await getAllProducts().then(data => {
      const response = data.find(i => i._id === id);
      setproducts(response);
    });
  };
  get();
  const navigation = useNavigation();
  // console.log(products.price, 'GET');
  return (
    <Layout title={'ABOUT'}>
      <Text
        style={{color: 'blue'}}
        onPress={() => {
          props.navigation.goBack();
        }}>
        Go Back
      </Text>
      <View style={styles.about_container}>
        <View style={styles.image}>
          {products?.image ? (
            <Image
              src={products?.image?.url}
              style={{height: 150, width: 100, objectFit: 'contain'}}
            />
          ) : null}
        </View>
        <Text style={{color: 'black'}}>{products?.title}</Text>
        <Text style={{color: 'green'}}>Rs {products?.price}</Text>

        <View style={styles.btnContainer}>
          <Button
            onPress={() => {
              navigation.push('AddToCart');
            }}
            mode="contained"
            style={{backgroundColor: 'orange'}}>
            ADD TO CART
          </Button>
          <Button mode="contained">BUY</Button>
        </View>
      </View>
    </Layout>
  );
}
