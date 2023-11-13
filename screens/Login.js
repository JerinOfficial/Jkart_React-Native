/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {userLogin} from '../actions/form';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const [formDatas, setformDatas] = useState({
    email: '',
    password: '',
  });
  const [error, seterror] = useState('');
  const formArray = [
    {
      lable: 'Email',
      placeholder: 'Email',
      type: 'email',
      value: formDatas.email,
      name: 'email',
      onchange: e => {
        setformDatas({...formDatas, email: e});
      },
    },
    {
      lable: 'Password',
      placeholder: 'Password',
      type: 'password',
      value: formDatas.password,
      name: 'password',
      onchange: e => {
        setformDatas({...formDatas, password: e});
      },
    },
  ];

  const handleSubmit = () => {
    if (formDatas.email !== '' && formDatas.password !== '') {
      console.log(formDatas, 'DATAS');
      userLogin(formDatas.email, formDatas.password).then(data => {
        // console.log(data, 'ERR');
        if (data.status === 'ok') {
          navigation.navigate('Home');
          setformDatas({
            email: '',
            password: '',
          });
        }
        seterror(data.error);
      });
    }
  };
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 50}}>
        Login
      </Text>
      {formArray.map((input, index) => {
        return (
          <TextInput
            style={style.input}
            placeholder={input.email}
            label={input.lable}
            key={index}
            type={input.type}
            onChangeText={input.onchange}
            value={input.value}
          />
        );
      })}
      <Text style={{color: 'red'}}>{error}</Text>
      <Button onPress={handleSubmit} mode="elevated">
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Don't have Account
      </Button>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 15,
  },
  input: {
    width: '80%',
    backgroundColor: 'lavender',
    elevation: 6,
  },
});
