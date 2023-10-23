/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import Layout from '../layout/Layout';
import {View, Text, Image} from 'react-native';
import {styles} from './Home';
import {getAllProducts} from '../actions/api';

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
          <Image
            src={products?.image?.url}
            style={{height: 150, width: 100, objectFit: 'contain'}}
          />
        </View>
        <Text style={{color: 'black'}}>{products.title}</Text>
      </View>
    </Layout>
  );
}
