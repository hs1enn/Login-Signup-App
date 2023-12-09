import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here using email and password state
    console.log('Logging in with:', email, password);
    // You can replace the console.log with your actual login functionality
  };

  return (
    <ImageBackground
      source={require("../assets/images/logs.jpg")} 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <SafeAreaView className="flex ">
      <View className="flex-row justify-start">
        </View>
        <View  className="flex-row justify-center ">
          <Image source={require('../assets/images/logoo.gif')} 
          style={{ width: 100, height: 100}} />
        </View>

      </SafeAreaView>
      <View 
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} 
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput 
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput 
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity className="flex items-end" onPress={() => navigation.navigate('Recovery')}>
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            // onPress={handleLogin}
            onPress={() => navigation.navigate('SignUp')}
            className="py-3 bg-yellow-400 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-yellow-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </ImageBackground>
  );
}
