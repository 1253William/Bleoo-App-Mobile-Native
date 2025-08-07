import { icons } from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface CommunityProfileScreenProps {
  navigation?: any;
}

const CommunityProfileScreen: React.FC<CommunityProfileScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Posts');

  const tabs = ['Posts', 'Members', 'Admin'];

  const Icon = icons.person;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold ml-4">Community Profile</Text>
        <View className="flex-1" />
        <TouchableOpacity onPress={() => router.push('/(tabs)/community/community-settings-screen')}>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Cover Image */}
        <View className="relative h-40">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop' }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Community Info */}
        <View className="px-4 -mt-8">
          <View className="relative">
            <View className="w-16 h-16 bg-white rounded-full items-center justify-center border-4 border-white ml-2">
              <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center">
                <Image
                    source={icons.person}
                    style={{ width: 36, height: 36 }}
                    resizeMode="contain"
                    />
              </View>
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row mb-4 mt-7">
            <View className="mr-6 flex flex-row gap-3">
              <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-gray-500 text-md">Members</Text>
              <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-black text-md font-semibold">100</Text>
            </View>
            <View className="mr-6 flex flex-row gap-3">
              <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-gray-500 text-md">Admin</Text>
              <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-black text-md font-semibold">3</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-xl font-semibold text-black">Tech Entrepreneurs</Text>
              <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-gray-500 text-md">Community</Text>
            </View>
            <TouchableOpacity className="bg-[#002D69] px-6 py-2 rounded-full">
              <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-white text-sm font-semibold">Invite +</Text>
            </TouchableOpacity>
          </View>

          

          {/* About */}
          <View className="mb-6">
            <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold text-black mb-2">About</Text>
            <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-gray-600 text-md leading-5">
              A community for tech entrepreneurs to connect, share ideas, and collaborate on innovative projects. Join us to network with like-minded individuals and grow your startup journey.
            </Text>
          </View>

          {/* Tabs */}
          <View className="flex-row border-b border-gray-200 mb-4">
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-4 py-2 mr-4 ${
                  activeTab === tab ? 'border-b-2 border-[#002D69]' : ''
                }`}
              >
                <Text 
                  style={{fontFamily: 'Gilroy-SemiBold'}} 
                  className={`text-md font-semibold ${
                    activeTab === tab ? 'text-[#002D69]' : 'text-gray-500'
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Posts */}
          <View className="flex-row px-4 py-4">
      {/* Profile Image Column */}
      <View className="mr-3">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>

      {/* Content Column */}
      <View className="flex-1">
        {/* Name, Username, Date */}
        <View className="flex-row justify-between mb-1">
          <View className="flex-row flex-wrap">
            <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-black text-md mr-1">
              Joshua User
            </Text>
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-sm mr-1">
              @joshuser
            </Text>
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-sm">
              · Feb 15, 2024
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Post Content */}
        <Text
          style={{ fontFamily: "Gilroy-Regular" }}
          className="text-gray-800 text-md leading-5 mb-3"
        >
          Excited to share our latest product update! We've been working hard on improving the user
          experience and adding new features based on your feedback.
        </Text>

        {/* Post Actions */}
        <View className="flex-row justify-between pr-6">
          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="#666" />
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-xs text-gray-600 ml-1">
              5
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="repeat-outline" size={16} color="#666" />
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-xs text-gray-600 ml-1">
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="heart-outline" size={16} color="#666" />
            <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-xs text-gray-600 ml-1">
              12
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="share-outline" size={16} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityProfileScreen;
