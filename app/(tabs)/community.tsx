import FloatingAddButton from '@/components/floating-add-button';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  stats: {
    comments: number;
    retweets: number;
    likes: number;
  };
}

const Community: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('2024');

  const posts: Post[] = [
    {
      id: '1',
      user: {
        name: 'Kwasi Jones',
        username: '@kwasi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      timestamp: '2h',
      stats: {
        comments: 12,
        retweets: 5,
        likes: 24,
      },
    },
    {
      id: '2',
      user: {
        name: 'Apenteng Paa',
        username: '@apenteng',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150&h=150&fit=crop&crop=face',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      timestamp: '4h',
      stats: {
        comments: 8,
        retweets: 12,
        likes: 45,
      },
    },
  ];

  const tabs = ['2024', 'Hot', 'Mentions', 'Business'];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      <FloatingAddButton onPress={() => router.push('/screens/community/create-community-screen')} />
      <ScrollView className="flex-1 relative">
        <View className="px-4 py-4 bg-white mt-2">
          <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-3 ">
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
              style={{ fontFamily: "Gilroy-Regular" }}
              className="flex-1 ml-2 text-base "
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              />
          </View>
          </View>

          <View className="flex-row mt-1 items-center justify-between px-4">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`px-4 py-3 rounded-xl mr-2 ${
                activeTab === tab ? 'bg-yellow-500' : 'border border-gray-200'
              }`}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={{ fontFamily: "Gilroy-Regular" }} className={`text-md font-medium ${
                activeTab === tab ? 'text-black' : 'text-black'
              }`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {posts.map((post) => (
          <View key={post.id} className="px-4 py-4 border-b border-gray-100">
            <View className="flex-row mb-3">
              <Image
                source={{ uri: post.user.avatar }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="font-semibold text-lg text-black mr-2">{post.user.name}</Text>
                  <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-md mr-2">{post.user.username}</Text>
                  <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-smdm">· {post.timestamp}</Text>
                </View>
                <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-800 leading-5 mb-3">{post.content}</Text>
                
                {post.image && (
                  <Image
                    source={{ uri: post.image }}
                    className="w-full h-48 rounded-lg mb-3"
                    resizeMode="cover"
                  />
                )}
                
                {/* Post Stats */}
                <View className="flex-row items-center">
                  <TouchableOpacity className="flex-row items-center mr-6">
                    <Ionicons name="chatbubble-outline" size={18} color="#666" />
                    <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-600 text-md ml-1">{post.stats.comments}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity className="flex-row items-center mr-6">
                    <Ionicons name="repeat-outline" size={18} color="#666" />
                    <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-600 text-md ml-1">{post.stats.retweets}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity className="flex-row items-center mr-6">
                    <Ionicons name="heart-outline" size={18} color="#666" />
                    <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-600 text-md ml-1">{post.stats.likes}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <Ionicons name="share-outline" size={18} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Community;