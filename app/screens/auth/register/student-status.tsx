import { useRegisterStore } from "@/store/RegisterStore"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"

export default function StudentStatus() {
  const [selectedStatus, setSelectedStatus] = useState("Alumni") 
  const router = useRouter()

const handleNext = () => {
  useRegisterStore.getState().setRegisterData({
    studentStatus: selectedStatus,
  });
  router.push("/screens/auth/register/personal-details");
};


  const handleBack = () => {
    router.back()
  }

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <View className="flex-row items-center px-6 py-4 bg-gray-50">
        <TouchableOpacity onPress={handleBack} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={{fontFamily:"Gilroy-SemiBold"}} className="text-xl  font-semibold text-gray-900">Select Student Status</Text>
      </View>

      <View className="flex-1 px-6 pt-8">
        <TouchableOpacity
          onPress={() => setSelectedStatus("Alumni")}
          className={`mb-4 p-4 rounded-2xl border-2 flex-row items-center ${
            selectedStatus === "Alumni" ? "bg-[#F8BD00] border-[#F8BD00]" : "bg-white border-gray-200"
          }`}
        >
          <View
            className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
              selectedStatus === "Alumni" ? "bg-black/10" : "bg-gray-100"
            }`}
          >
            <Ionicons name="person" size={18} color={selectedStatus === "Alumni" ? "#000" : "#6b7280"} />
          </View>
          <Text style={{fontFamily:"Gilroy-Medium"}} className={`text-lg font-medium ${selectedStatus === "Alumni" ? "text-black" : "text-gray-700"}`}>
            Alumni
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedStatus("Non-Alumni")}
          className={`mb-8 p-4 rounded-2xl border-2 flex-row items-center ${
            selectedStatus === "Non-Alumni" ? "bg-[#F8BD00] border-[#F8BD00]" : "bg-white border-gray-200"
          }`}
        >
          <View
            className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
              selectedStatus === "Non-Alumni" ? "bg-black/10" : "bg-gray-100"
            }`}
          >
            <Ionicons name="man" size={18} color={selectedStatus === "Non-Alumni" ? "#000" : "#6b7280"} />
          </View>
          <Text style={{fontFamily:"Gilroy-Medium"}} className={`text-lg font-medium ${selectedStatus === "Non-Alumni" ? "text-black" : "text-gray-700"}`}>
            Non-Alumni
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          className="bg-[#002D69] h-14 rounded-full items-center justify-center"
          style={{
            shadowColor: "#002D69",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Text style={{fontFamily:"Gilroy-Medium"}} className="text-white text-base font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
