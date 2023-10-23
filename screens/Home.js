/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import Layout from '../layout/Layout';
import {Text} from 'react-native-paper';
import {getAllProducts} from '../actions/api';
import {View, Image, StyleSheet} from 'react-native';

export default function Home(props) {
  const [products, setproducts] = useState([]);
  getAllProducts().then(data => {
    // console.log(data, 'DATA');
    setproducts(data);
  });
  return (
    <Layout title={'Home'}>
      <View style={styles.gridContainer}>
        {products.map(item => (
          <View key={item._id} style={styles.cardContainer}>
            <View style={styles.card}>
              <Image
                src={item.image.url}
                style={{height: 50, width: 50, objectFit: 'contain'}}
              />
            </View>
            <Text
              onPress={() => {
                props.navigation.navigate('About', {
                  id: item._id,
                });
              }}
              style={{
                color: 'black',
                fontSize: 10,
                flexWrap: 'wrap',
                maxWidth: 70,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </Layout>
  );
}
export const styles = StyleSheet.create({
  gridContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  card: {
    borderRadius: 100,
    backgroundColor: 'lavender',
    height: 70,
    width: 70,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  about_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    width: 350,
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'lavender',
    height: 200,
    width: 200,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
