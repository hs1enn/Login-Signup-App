import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/images/welcomee.jpg")}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <View className="flex-1 flex justify-around my-4">
          <Text className="text-white font-bold text-4xl text-center">
            Explore Science, Explore the Universe!
          </Text>
          <View className="flex-row justify-center">
            <Image
              source={require("../assets/images/logoo.gif")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View className="space-y-4">
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              className="py-3 bg-yellow-400 mx-7 rounded-xl"
            >
              <Text className="text-xl font-bold text-center text-gray-700">
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text className="text-white font-semibold">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-400"> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
