/* eslint-disable prettier/prettier */
import React from 'react';
import {Appbar, IconButton, Searchbar} from 'react-native-paper';
import MenuIcon from './SVG/MenuIcon';
import CartIcon from './SVG/CartIcon';
import {Pressable, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Header({title, open, ...props}) {
  const _handleSearch = () => console.log('Searching');
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();

  return (
    <Appbar.Header style={Styles.container}>
      <View style={Styles.header}>
        <IconButton
          icon={() => <MenuIcon />}
          onPress={() => {
            open(true);
          }}
        />
        <Appbar.Content title={title} />
        <Pressable onPress={() => navigation.navigate('AddToCart')}>
          <CartIcon />
        </Pressable>
      </View>
      <Searchbar
        icon={() => <MenuIcon />}
        style={Styles.searchBar}
        placeholder="Search for Products, Brands and More"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </Appbar.Header>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(40,116,240,1.00)',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    height: 'auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
  },
  searchBar: {
    borderRadius: 0,
    backgroundColor: 'white',
    color: 'gray',
  },
});
