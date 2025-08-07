import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface CreateCommunityScreenProps {
  navigation?: any;
}

const CreateCommunityScreen: React.FC<CreateCommunityScreenProps> = ({ navigation }) => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('Public');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold ml-4">Create Community</Text>
      </View>

      <ScrollView className="flex-1 px-6 py-6">
        {/* Upload Image */}
        <TouchableOpacity className="border-2 border-dashed border-gray-300 rounded-lg h-32 items-center justify-center mb-6">
          <Ionicons name="camera" size={32} color="#9ca3af" />
          <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-gray-500 text-md mt-2">Add Community Image</Text>
        </TouchableOpacity>

        {/* Community Name */}
        <View className="mb-4">
          <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-black text-base font-semibold mb-2">Community Name</Text>
          <TextInput
            value={communityName}
            onChangeText={setCommunityName}
            placeholder="Enter community name"
            style={{fontFamily: 'Gilroy-Regular'}}
            className="border border-gray-300 rounded-full px-3 py-4 text-md"
          />
        </View>

        {/* Description */}
        <View className="mb-4">
          <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-black text-base font-semibold mb-2">Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="What is this community about?"
            multiline
            numberOfLines={4}
            style={{fontFamily: 'Gilroy-Regular'}}
            className="border border-gray-300 rounded-lg px-3 py-4 text-base h-24"
            textAlignVertical="top"
          />
        </View>

        {/* Privacy */}
        <View className="mb-6">
          <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-black text-base font-semibold mb-2">Privacy</Text>
          <TouchableOpacity className="border border-gray-300 rounded-full px-3 py-3 flex-row items-center justify-between">
            <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-black text-base">{privacy}</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={{fontFamily: 'Gilroy-Regular'}} className="text-[#002D69] font-semibold text-sm mt-1">
            Anyone can search, find and join immediately
          </Text>
        </View>
      </ScrollView>

      {/* Create Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity 
          className="bg-[#002D69] rounded-full py-4 items-center"
          onPress={() => router.push('/(tabs)/community/community-profile-screen')}
        >
          <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-white text-base font-semibold">Create Community</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateCommunityScreen;
