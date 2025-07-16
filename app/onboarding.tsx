import { images } from "@/constants/images"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from "react-native"

const { width, height } = Dimensions.get("window")

const onboardingSteps = [
  {
    title: "W)mba Shia!",
    subtitle: "The Brotherhood lives on",
    description: "Rekindle old friendships, and make new connections",
    image: images.entrance,
  },
  {
    title: "Reconnect & Build Stronger Bonds",
    subtitle: "News & Events",
    description: "Get the latest updates about activities and programs",
    image: images.alumni,
  },
  {
    title: "Whether home or abroad, keep in touch with fellow Bleoobii",
    subtitle: "Join the Community",
    description: "Engage with past students and current members easily",
    image: images.students,
  },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const current = onboardingSteps[step]

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep((prev) => prev + 1)
    } else {
      router.replace("/screens/auth/login")
    }
  }

  const handleSkip = () => {
    router.replace("/screens/auth/login")
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Background Decorative Elements */}
      <View className="absolute top-0 right-0 w-32 h-32 bg-[#F8BD00]/10 rounded-full -translate-y-16 translate-x-16" />
      <View className="absolute top-40 left-0 w-20 h-20 bg-[#002D69]/5 rounded-full -translate-x-10" />
      <View className="absolute bottom-40 right-0 w-24 h-24 bg-[#F8BD00]/5 rounded-full translate-x-12" />

      {/* Main Content Container */}
      <View className="flex-1 justify-between px-6 pt-20 pb-10">
        {/* Image and Content Section */}
        <View className="flex-1 items-center justify-center">
          {/* Image Container with Enhanced Styling */}
          <View className="relative mb-8">
            <View className="absolute inset-0 bg-[#F8BD00]/20 rounded-3xl transform rotate-3" />
            <View className="relative bg-white rounded-3xl shadow-lg p-2">
              <Image
                source={current.image}
                className="rounded-2xl shadow-sm"
                style={{
                  width: width * 0.75,
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>

          {/* Step Indicators */}
          <View className="flex-row items-center justify-center mb-8">
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                className="mx-1"
                style={{
                  height: 8,
                  borderRadius: 4,
                  width: index === step ? 32 : 8,
                  backgroundColor: index === step ? "#F8BD00" : "#E5E7EB",
                }}
              />
            ))}
          </View>

          {/* Text Content */}
          <View className="items-center px-4">
            <Text style={{fontFamily: "Gilroy-SemiBold" }} className="text-[#F8BD00] text-2xl font-bold text-center mb-3">{current.title}</Text>
            <Text style={{fontFamily: "Gilroy-Medium" }} className="text-[#002D69] font-bold text-3xl text-center mb-4 leading-tight">{current.subtitle}</Text>
            <Text style={{fontFamily: "Gilroy-Regular" }} className="text-gray-700 text-lg text-center leading-relaxed max-w-sm">{current.description}</Text>
          </View>
        </View>

        {/* Bottom Section with Buttons */}
        <View className="w-full space-y-4">
          {/* Next Button */}
          <TouchableOpacity
            className="bg-[#002D69] px-6 py-5 rounded-full items-center justify-center shadow-lg"
            onPress={handleNext}
            style={{
              shadowColor: "#002D69",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Text style={{fontFamily: "Gilroy-Regular"}} className="text-white text-xl font-semibold">
              {step === onboardingSteps.length - 1 ? "Get Started" : "Continue"}
            </Text>
          </TouchableOpacity>

          {/* Secondary Action */}
          {step < onboardingSteps.length - 1 && (
            <TouchableOpacity className="px-6 py-4 items-center justify-center" onPress={handleSkip}>
              <Text style={{fontFamily: "Gilroy-Regular"}} className="text-gray-600 text-lg">Skip</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Bottom Decorative Wave */}
      <View className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8BD00]/5 to-transparent" />
    </View>
  )
}
