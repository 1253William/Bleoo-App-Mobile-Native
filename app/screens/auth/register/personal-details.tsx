import { useRegisterStore } from "@/store/RegisterStore"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function PersonalDetails() {
  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [yearGroup, setYearGroup] = useState("")
  const [occupation, setOccupation] = useState("")
  const [showOccupationDropdown, setShowOccupationDropdown] = useState(false)
  const [showYearGroupDropdown, setShowYearGroupDropdown] = useState(false)
  const router = useRouter()

  const occupations = ["Student", "Professional", "Entrepreneur", "Teacher", "Engineer", "Doctor", "Other"]
  const yearGroups = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]

const handleNext = () => {
  useRegisterStore.getState().setRegisterData({
    fullName: fullName,
    userName: userName,
    email: email,
    yearGroup: yearGroup,
    occupation: occupation,
  });

  router.push("/screens/auth/register/year-group");
};


  const handleBack = () => {
    router.back()
  }



  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={handleBack} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={{fontFamily:"Gilroy-SemiBold"}} className="text-xl font-semibold text-gray-900">Register</Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 pt-8">
        <View >
          <View className="mb-4">
            <TextInput
            style={{fontFamily:"Gilroy-Medium"}}
              className="h-14 w-full border border-gray-300 rounded-full px-6 text-lg text-gray-800 bg-white"
              placeholder="Enter your full name"
              placeholderTextColor="#9ca3af"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
          </View>

          {/* Last Name */}
          <View className="mb-4">
            <TextInput
            style={{fontFamily:"Gilroy-Medium"}}
              className="h-14 w-full border border-gray-300 rounded-full px-6 text-lg text-gray-800 bg-white"
              placeholder="Enter your user name"
              placeholderTextColor="#9ca3af"
              value={userName}
              onChangeText={setUserName}
              autoCapitalize="words"
            />
          </View>

          {/* Email */}
          <View className="relative mb-4">
            <TextInput
            style={{fontFamily:"Gilroy-Medium"}}
              className="h-14 w-full border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white"
              placeholder="Enter your Email"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View className="absolute right-4 top-4">
              <Ionicons name="mail-outline" size={20} color="#9ca3af" />
            </View>
          </View>

          {/* Year Group */}
          <View className="relative mb-4">
            <TouchableOpacity
              onPress={() => setShowYearGroupDropdown(!showYearGroupDropdown)}
              className="h-14 w-full border border-gray-300 rounded-full px-6 pr-12 justify-center bg-white"
            >
              <Text style={{fontFamily:"Gilroy-Medium"}} className={`text-lg ${yearGroup ? "text-gray-800" : "text-gray-400"}`}>
                {yearGroup || "Select Year Group"}
              </Text>
              <View className="absolute right-4 top-4">
                <Ionicons name="calendar-outline" size={22} color="#9ca3af" />
              </View>
            </TouchableOpacity>

            {showYearGroupDropdown && (
              <View className="absolute top-16 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-md z-10 overflow-hidden">
                {yearGroups.map((year) => (
                  <TouchableOpacity
                    key={year}
                    onPress={() => {
                      setYearGroup(year)
                      setShowYearGroupDropdown(false)
                    }}
                    className="px-6 py-4 border-b border-gray-100 last:border-b-0"
                  >
                    <Text style={{fontFamily:"Gilroy-Medium"}} className="text-base text-gray-800">{year}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Occupation */}
          <View className="relative mb-8">
            <TouchableOpacity
              onPress={() => setShowOccupationDropdown(!showOccupationDropdown)}
              className="h-14 w-full border border-gray-300 rounded-full px-6 pr-12 justify-center bg-white"
            >
              <Text style={{fontFamily:"Gilroy-Medium"}} className={`text-lg ${occupation ? "text-gray-800" : "text-gray-400"}`}>
                {occupation || "Occupation"}
              </Text>
              <View className="absolute right-4 top-4">
                <Ionicons name="chevron-down" size={20} color="#9ca3af" />
              </View>
            </TouchableOpacity>

            {showOccupationDropdown && (
              <View className="absolute top-16 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-md z-10 overflow-hidden">
                {occupations.map((occ) => (
                  <TouchableOpacity
                    key={occ}
                    onPress={() => {
                      setOccupation(occ)
                      setShowOccupationDropdown(false)
                    }}
                    className="px-6 py-4 border-b border-gray-100 last:border-b-0"
                  >
                    <Text style={{fontFamily:"Gilroy-Medium"}} className="text-base text-gray-800">{occ}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          className="bg-[#002D69] h-14 rounded-full items-center justify-center mb-4"
        >
          <Text style={{fontFamily:"Gilroy-Medium"}} className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View className="items-center mb-6">
          <TouchableOpacity onPress={() => router.push("/screens/auth/register/year-group")}>
            <Text style={{fontFamily:"Gilroy-Medium"}} className="text-lg text-gray-600">
              Have an account? <Text style={{fontFamily:"Gilroy-Medium"}} className="text-[#002D69] font-medium">Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
