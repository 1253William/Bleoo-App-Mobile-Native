import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ResetPasswordScreenProps {
  navigation: any;
}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetPassword = () => {
    // Handle password reset logic here
    router.push('/screens/auth/forgot-password/reset-password-success');
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
      <View className="flex-1 px-5 pt-10">
        <View className="relative mb-5">
          <TextInput
            style={{ fontFamily: "Gilroy-Regular" }}
            className="border border-gray-300 rounded-full px-4 py-4 text-lg pr-12"
            placeholder="Enter new Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showNewPassword}
          />
          <TouchableOpacity 
            className="absolute right-4 top-4"
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Ionicons 
              name={showNewPassword ? "eye" : "eye-off"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>

        <View className="relative mb-8">
          <TextInput
            className="border border-gray-300 rounded-full px-4 py-4 text-lg pr-12"
            style={{ fontFamily: "Gilroy-Regular" }}
            placeholder="Confirm new Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity 
            className="absolute right-4 top-4"
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons 
              name={showConfirmPassword ? "eye" : "eye-off"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          className="bg-[#002D69] rounded-full py-4 items-center"
          onPress={handleResetPassword}
        >
          <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-white text-lg font-semibold">Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;