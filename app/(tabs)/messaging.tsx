import { Ionicons } from '@expo/vector-icons';
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

interface Message {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

const MessagingScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const messages: Message[] = [
    {
      id: '1',
      user: {
        name: 'Kwasi Jones',
        username: '@kwasi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      lastMessage: 'Lorem ipsum dolor sit amet consectetur...',
      timestamp: '09:45 AM',
      unread: true,
    },
    {
      id: '2',
      user: {
        name: 'Kiyani Sam',
        username: '@kiyani',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150&h=150&fit=crop&crop=face',
      },
      lastMessage: 'Lorem ipsum dolor sit amet consectetur...',
      timestamp: 'Yesterday',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />

      <ScrollView className="flex-1">
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
        {messages.map((message) => (
          <TouchableOpacity key={message.id} className="flex-row items-center px-4 py-4 border-b border-gray-100">
            <Image
              source={{ uri: message.user.avatar }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View className="flex-1">
              <View className="flex-row items-center justify-between mb-1">
                <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="font-semibold text-black text-lg">{message.user.name}</Text>
                <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-md">{message.timestamp}</Text>
              </View>
              <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-md">{message.user.username}</Text>
              <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-600 text-md mt-1" numberOfLines={1}>
                {message.lastMessage}
              </Text>
            </View>
            {message.unread && (
              <View className="w-3 h-3 bg-blue-600 rounded-full ml-2" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      
    </SafeAreaView>
  );
};

export default MessagingScreen;