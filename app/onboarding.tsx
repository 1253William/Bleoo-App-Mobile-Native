
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const onboardingSteps = [
  {
    title: 'W)mba Shia!',
    subtitle: 'The Brotherhood lives on',
    description: 'Rekindle old friendships, and make new connections',
    image: images.entrance,
  },
  {
    title: 'Reconnect & Build Stronger Bonds',
    subtitle: 'News & Events',
    description: 'Get the latest updates about activities and programs',
    image: images.alumni, 
  },
  {
    title: 'Whether home or abroad, keep in touch with fellow Bleoobii',
    subtitle: 'Join the Community',
    description: 'Engage with past students and current members easily',
    image: images.students, 
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const current = onboardingSteps[step];

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      router.replace('/(tabs)/chat');
    }
  };

  const handleSkip = () => {
    router.replace('/(tabs)/chat');
  };

  return (
    <View className="flex-1 items-center justify-around py-10 px-6 bg-white">
      {/* Main Content */}
      <View className="items-center justify-center mt-20">
        <Image
          source={current.image}
          className=" h-auto shadow-sm mb-6 rounded-2xl"
        />
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          {onboardingSteps.map((_, index) => (
            <View
              key={index}
              style={{
                height: 8,
                borderRadius: 4,
                width: index === step ? 24 : 8,
                backgroundColor: index === step ? '#F8BD00' : 'gray',
                marginHorizontal: 4, // adds space between indicators
              }}
            />
          ))}
        </View>

        <Text className="text-[#F8BD00] text-xl font-bold mt-6">
          {current.title}
        </Text>
        <Text className="text-black font-semibold text-2xl mt-2">
          {current.subtitle}
        </Text>
        <Text className="text-[#090A0A] text-xl mt-4 text-center">
          {current.description}
        </Text>
      </View>

      {/* Buttons */}
      <View className="w-full mb-4">
        <TouchableOpacity
          className="bg-[#002D69] px-4 py-5 rounded-full items-center justify-center shadow-sm"
          onPress={handleNext}
        >
          <Text className="text-white text-xl">
            {step === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 py-5 rounded-full items-center justify-center mt-4"
          onPress={handleSkip}
        >
          <Text className="text-black text-xl">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
