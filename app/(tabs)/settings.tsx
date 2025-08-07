import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface SettingsScreenProps {
  navigation?: any;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const settingsOptions = [
    {
      id: '1',
      title: 'Profile management',
      onPress: () => {
        router.push('/profile');
      },
    },
    {
      id: '2',
      title: 'Privacy settings',
      onPress: () => {
        // Navigate to privacy settings
        console.log('Navigate to Privacy settings');
      },
    },
    {
      id: '3',
      title: 'Notification preferences',
      onPress: () => {
        // Navigate to notification preferences
        console.log('Navigate to Notification preferences');
      },
    },
    {
      id: '4',
      title: 'Help Center',
      onPress: () => {
        // Navigate to help center
        console.log('Navigate to Help Center');
      },
    },
    {
      id: '5',
      title: 'Languages',
      onPress: () => {
        // Navigate to languages
        console.log('Navigate to Languages');
      },
    },
    {
      id: '6',
      title: 'Sign Out',
      onPress: () => {
        // Handle sign out
        console.log('Sign Out');
      },
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-4 py-3 bg-white">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold ml-4">Settings</Text>
        </View>

        {/* Search Bar */}
        <View className="px-4 my-6">
          <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-3 border border-gray-300">
            <Ionicons name="search" size={20} color="#666" />
            <TextInput
              placeholder="Search Settings"
              placeholderTextColor="#666"
              style={{fontFamily: 'Gilroy-Regular'}}
              className="flex-1 ml-2 text-base"
            />
          </View>
        </View>

        {/* Settings Options */}
        <View className="px-5">
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
                className="text-lg text-black"
              >
                {option.title}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

export default SettingsScreen;
