import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ResetPasswordSuccessScreenProps {
  navigation: any;
}

const ResetPasswordSuccessScreen: React.FC<ResetPasswordSuccessScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to login screen
    router.push('/screens/auth/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
        <TouchableOpacity 
          className="p-1"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-xl font-semibold text-black">Reset Password</Text>
        <View className="w-8" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-24 items-center">
        <View className="mb-8">
          <View className="w-20 h-20 rounded-full bg-amber-100 items-center justify-center">
            <Ionicons name="checkmark" size={40} color="#f59e0b" />
          </View>
        </View>

        <Text style={{ fontFamily: "Gilroy-Medium" }} className="text-xl font-semibold text-black mb-3">Password Reset Success!</Text>
        <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-md text-gray-600 text-center leading-5 mb-16">
          You can now login with your new{'\n'}password
        </Text>

        <TouchableOpacity 
          className="bg-[#002D69] rounded-full py-4 px-16 items-center"
          onPress={handleLogin}
        >
          <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-white text-lg font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordSuccessScreen;