import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface CommunitySettingsScreenProps {
  navigation?: any;
}

const CommunitySettingsScreen: React.FC<CommunitySettingsScreenProps> = ({ navigation }) => {
  const settingsOptions = [
    {
      id: '1',
      title: 'Add Members',
      onPress: () => {
        console.log('Add Members');
      },
    },
    {
      id: '2',
      title: 'Remove Members',
      onPress: () => {
        console.log('Remove Members');
      },
    },
    {
      id: '3',
      title: 'Moderate Posts',
      onPress: () => {
        console.log('Moderate Posts');
      },
    },
    {
      id: '4',
      title: 'Join Requests',
      onPress: () => {
        router.push('/community/join-requests-screen');
      },
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold ml-4">Community Settings</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={option.id}
            onPress={option.onPress}
            className={`flex-row items-center justify-between py-4 ${
              index !== settingsOptions.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <Text 
              style={{fontFamily: 'Gilroy-Regular'}} 
              className="text-base text-black"
            >
              {option.title}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunitySettingsScreen;
