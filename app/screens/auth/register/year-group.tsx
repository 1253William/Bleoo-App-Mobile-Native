import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"

export default function YearGroup() {
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedResidency, setSelectedResidency] = useState("")
  const [selectedHall, setSelectedHall] = useState("")
  const [selectedGroups, setSelectedGroups] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()

  const classes = ["Form 1", "Form 2", "Form 3", "Form 4", "Form 5", "Form 6", "Lower 6", "Upper 6"]
  const residencies = ["Day Student", "Boarding Student", "Mixed"]
  const halls = ["Aggrey Hall", "Casely-Hayford Hall", "Guggisberg Hall", "Livingstone Hall", "Other"]
  const affiliatedGroups = [
    "Sports Club",
    "Drama Society",
    "Science Club",
    "Music Society",
    "Art Club",
    "Debate Society",
  ]

const handleNext = () => {
  // useRegisterStore.getState().setRegisterData({
  //   studentStatus: selectedStatus,
  // });
  router.push("/screens/auth/register/password");
};

  const handleBack = () => {
    router.back()
  }

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const DropdownField = ({
    label,
    value,
    options,
    dropdownKey,
  }: {
    label: string
    value: string
    options: string[]
    dropdownKey: string
  }) => (
    <View className="mb-4 relative">
      <TouchableOpacity onPress={() => toggleDropdown(dropdownKey)}>
        <View   className="h-14 w-full border border-gray-300 rounded-full px-6 pr-12 text-lg text-gray-800 bg-white">
          <Text style={{fontFamily:"Gilroy-Medium"}} className={`text-lg ${value ? "text-gray-800" : "text-gray-400"}`}>{value || label}</Text>
        </View>
        <View className="absolute right-4 top-4">
          <Ionicons
            name="chevron-down"
            size={20}
            color="#9ca3af"
            style={{
              transform: [{ rotate: activeDropdown === dropdownKey ? "180deg" : "0deg" }],
            }}
          />
        </View>
      </TouchableOpacity>

      {activeDropdown === dropdownKey && (
        <View className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                if (dropdownKey === "class") setSelectedClass(option)
                else if (dropdownKey === "residency") setSelectedResidency(option)
                else if (dropdownKey === "hall") setSelectedHall(option)
                else if (dropdownKey === "groups") setSelectedGroups(option)
                setActiveDropdown(null)
              }}
              className="p-4 border-b border-gray-100 last:border-b-0"
            >
              <Text style={{fontFamily:"Gilroy-Medium"}} className="text-base text-gray-800">{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={handleBack} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={{fontFamily:"Gilroy-Medium"}} className="text-lg font-semibold text-gray-900">Register</Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 pt-8">
        {/* Form Fields */}
        <View>
          <DropdownField label="Class" value={selectedClass} options={classes} dropdownKey="class" />

          <DropdownField label="Residency" value={selectedResidency} options={residencies} dropdownKey="residency" />

          <DropdownField label="Hall" value={selectedHall} options={halls} dropdownKey="hall" />

          <DropdownField
            label="Affiliated groups"
            value={selectedGroups}
            options={affiliatedGroups}
            dropdownKey="groups"
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          className="bg-[#002D69] h-14 rounded-full items-center justify-center mb-8"
        >
          <Text style={{fontFamily:"Gilroy-Medium"}} className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
