import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { loginUser } from "@/services/authServices"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    const payLoad = {
      email: email,
      password:password
    }
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }
    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address")
      return
    }

try {
  setIsLoading(true);
  const result = await loginUser(payLoad);
  Alert.alert("Login successful");
  router.replace("/(tabs)");
} catch (error: any) {
  console.log("Login Error:", error.message);
  Alert.alert("Login Failed", error.message);
} finally {
  setIsLoading(false);
}
  }
  const handleForgotPassword = () => {
    router.push("/screens/auth/forgot-password/forgot-password")
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

          {/* Background Circles */}
          <View className="absolute top-0 right-0 w-40 h-40 bg-[#002D69]/5 rounded-full -translate-y-20 translate-x-20" />
          <View className="absolute top-32 left-0 w-24 h-24 bg-[#F8BD00]/10 rounded-full -translate-x-12" />
          <View className="absolute bottom-40 right-0 w-32 h-32 bg-[#002D69]/3 rounded-full translate-x-16" />

          {/* Main Content */}
          <View className="flex-1 justify-center px-8 py-12">
            {/* Header */}
            <View className="items-center mb-10">
              <Text style={{fontFamily: "Gilroy-SemiBold"}} className="text-4xl font-bold text-[#002D69] mb-2">Log In</Text>
            </View>

            {/* Email Input */}
            <View className="mb-6">
              <View className="relative">
                <TextInput
                  className="h-14 w-full border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white"
                  placeholder="Email address"
                  placeholderTextColor="#9ca3af"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{fontFamily: "Gilroy-Regular"}}
                />
                <View className="absolute right-4 top-4">
                  <Ionicons name="mail-outline" size={22} color="#6b7280" />
                </View>
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-3">
              <View className="relative">
                <TextInput
                  className="h-14 border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white"
                  placeholder="Password"
                  placeholderTextColor="#9ca3af"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  style={{fontFamily: "Gilroy-Regular", textAlignVertical: "center"}}
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

            {/* Forgot Password */}
            <TouchableOpacity className="mb-6 self-end" onPress={handleForgotPassword}>
              <Text style={{fontFamily: "Gilroy-Medium"}} className="text-lg text-[#002D69] font-medium">Forgot your password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={isLoading}
              className={`h-14 rounded-full justify-center items-center ${
                isLoading ? "bg-[#001a4d]/70" : "bg-[#002D69]"
              }`}
            >
              {isLoading ? (
                <View className="flex-row items-center">
                  <ActivityIndicator size="small" color="white" />
                  <Text style={{fontFamily: "Gilroy-Regular"}} className="text-base font-semibold text-white ml-2">Signing In...</Text>
                </View>
              ) : (
                <Text style={{fontFamily: "Gilroy-Medium"}} className="text-lg font-semibold text-white">Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Alternative Login Options */}
            {/* <View className="items-center mt-8">
              <Text className="text-sm text-gray-500 mb-4">Or continue with</Text>
              <View className="flex-row space-x-4">
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="logo-google" size={20} color="#4285F4" />
                </TouchableOpacity>
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="logo-apple" size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                </TouchableOpacity>
              </View>
            </View> */}

            {/* Footer */}
            <View className="flex-row justify-center items-center mt-8">
              <Text style={{fontFamily: "Gilroy-Regular"}} className="text-lg text-gray-500">Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push("/screens/auth/register/student-status")}>
                <Text style={{fontFamily: "Gilroy-Regular"}} className="text-lg font-semibold text-[#002D69] ml-1">Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
