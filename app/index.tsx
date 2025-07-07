import { images } from '@/constants/images'; // your logo
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      const hasOnboarded = await AsyncStorage.getItem('hasOnBoarded');

      setTimeout(() => {
        if (hasOnboarded === 'true') {
          router.replace('/(tabs)');
        } else {
          router.replace('/onboarding');
        }
      }, 2000);
    };

    checkOnboarding();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#002D69]">
      <Image source={images.logo} className="w-64 h-auto mb-4" resizeMode="contain" />
    </View>
  );
}
