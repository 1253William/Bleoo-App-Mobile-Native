import { forgotPassword } from '@/services/authServices';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ForgotPasswordScreenProps {
  navigation: any;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
       const result = await forgotPassword(email);
        Alert.alert("Success", "A verification email has been sent to your email address.");
        router.push('/screens/auth/forgot-password/verification-screen');
    } catch (error) {
      Alert.alert("Error", "Failed to send verification email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
        <TouchableOpacity onPress={router.back} className="p-1">
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-xl font-semibold text-black">
          Forgot Password
        </Text>
        <View className="w-8" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-10">
        <View className="relative mb-8">
          <TextInput
            style={{ fontFamily: "Gilroy-Regular" }}
            className="border border-gray-300 rounded-full px-4 py-4 text-lg pr-12"
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Ionicons
            name="mail-outline"
            size={20}
            color="#666"
            className="absolute right-4 top-4"
          />
        </View>

        <TouchableOpacity
          className="bg-[#002D69] rounded-full py-4 items-center justify-center flex-row"
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-white text-lg font-semibold">
              Submit
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
