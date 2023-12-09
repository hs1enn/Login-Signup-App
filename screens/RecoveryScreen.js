import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function RecoveryScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
        source={require("../assets/images/rec.jpg")} 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-start">
        </View>
        <View  className="flex-row justify-center ">
          <Image source={require('../assets/images/logoo.gif')} 
          style={{ width: 100, height: 100}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-xl font-bold text-center text-gray-700">Find Your Account</Text>
           
            <Text className="text-gray-700 ml-4">	
Please enter your email or mobile number to search for your account.</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              placeholder="Email or Phone Number"
              value="" 
            />
            
            <TouchableOpacity 
              
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Send Code
                </Text>
             </TouchableOpacity>
            
          </View>

          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Remembered your Account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                  <Text className="font-semibold text-yellow-500"> Go Back</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </ImageBackground>
    
  )
}