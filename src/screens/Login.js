import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <LottieView
        source={require('../assets/lottie/hello.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white', flex: 1},
  homeButton: {
    backgroundColor: '#733cd9',
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  lottie: {height: '80%', width: '100%'},
});

export default Login;
