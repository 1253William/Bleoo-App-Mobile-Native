import { verifyOtp } from '@/services/authServices';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ForgotPasswordVerificationScreenProps {
  navigation: any;
  route: any;
}

const ForgotPasswordVerificationScreen: React.FC<ForgotPasswordVerificationScreenProps> = ({ 
  navigation, 
  route 
}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [tempToken, setTempToken] = useState('');
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    try{
        const response = await verifyOtp({ otp: otp.join('') });
        setTempToken(response.tempToken);
        Alert.alert("Success", "OTP verified successfully!");
        router.push('/screens/auth/forgot-password/reset-password');
    } catch (error) {
      Alert.alert("Error", "Failed to verify OTP. Please try again.");
    }
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
        <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-xl font-semibold text-black">Verify OTP</Text>
        <View className="w-8" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-16 items-center">
        <View className="mb-8">
          <View className="w-20 h-20 rounded-full bg-amber-100 items-center justify-center">
            <Ionicons name="mail" size={40} color="#f59e0b" />
          </View>
        </View>

        <Text style={{ fontFamily: "Gilroy-Medium" }} className="text-xl font-semibold text-black mb-3">Check your Email</Text>
        <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-md text-gray-600 text-center leading-5 mb-10">
          Enter OTP we've sent to your email.{'\n'}It's valid for 10 minutes
        </Text>

        <View className="flex-row justify-between mb-10 w-4/5">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={{ fontFamily: "Gilroy-Regular" }}
              className="w-14 h-14 border border-gray-300 rounded-lg text-lg font-semibold text-center"
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

        <TouchableOpacity 
          className="bg-[#002D69] rounded-full py-4 px-16 items-center"
          onPress={handleSubmit}
        >
          <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-white text-lg font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordVerificationScreen;