import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/data/')
    .then(response => {
      setData(response.data.message);
    })
    .catch(error => {
      console.log(error);
    })
  },[])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Data from Django : {data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
