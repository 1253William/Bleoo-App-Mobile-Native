import { registerUser } from '@/services/authServices'
import { useRegisterStore } from '@/store/RegisterStore'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Password = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { registerData } = useRegisterStore.getState();

const finalPayload = {
  fullName: registerData.fullName || "",
  userName: registerData.userName || "",
  email: registerData.email || "",
  password: password,
  studentStatus: registerData.studentStatus || "",
  yearGroup: registerData.yearGroup || "",
  occupation: registerData.occupation || "",
  yearClass: registerData.yearClass || "",
  residency: registerData.residency || "",
  hall: registerData.hall || "",
  affiliatedGroups: Array.isArray(registerData.affiliatedGroups)
  ? registerData.affiliatedGroups
  : registerData.affiliatedGroups
  ? [registerData.affiliatedGroups]
  : [],
};


  const handleRegister = async () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please enter and confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      await registerUser(finalPayload);
      Alert.alert("Success", "Registration complete!");
      console.log("🚀 Payload:", finalPayload);
      useRegisterStore.getState().clearRegisterData();
      router.replace("/screens/auth/login");
    } catch (error: any) {
      console.log("🚀 Payload:", finalPayload);
      console.log("❌ Registration error:", JSON.stringify(error, null, 2));
      Alert.alert("Registration Failed", error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={handleBack} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-xl font-semibold text-gray-900">
          Register
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 pt-8">
        {/* Form Fields */}
        <View>
          {/* Password */}
          <View className="mb-3">
            <View className="relative">
              <TextInput
                className="h-14 border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white mb-3"
                placeholder="Password"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                style={{ fontFamily: "Gilroy-Regular" }}
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View className="mb-3">
            <View className="relative mb-4">
              <TextInput
                className="h-14 border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white"
                placeholder="Confirm Password"
                placeholderTextColor="#9ca3af"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                style={{ fontFamily: "Gilroy-Regular" }}
              />
              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms Info */}
          <View className="mb-4 flex-row items-center justify-center">
            <Text style={{ fontFamily: "Gilroy-Medium" }}>
              By clicking Register, you agree to our Terms of Service and Privacy Policy.
            </Text>
          </View>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          onPress={handleRegister}
          disabled={isLoading}
          className="bg-[#002D69] h-14 rounded-full items-center justify-center mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ fontFamily: "Gilroy-Medium" }} className="text-white text-lg font-semibold">
              Register
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Password;

const styles = StyleSheet.create({});
