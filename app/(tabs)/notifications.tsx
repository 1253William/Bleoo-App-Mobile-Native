import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Notification {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  type: 'like' | 'comment' | 'follow' | 'mention';
  content: string;
  timestamp: string;
  isRead: boolean;
}

const Notification: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
   const [activeTab, setActiveTab] = useState('General');

   const tabs = ['General', 'Interactions', 'Chats', 'Mentions', 'Follows'];

  const notifications: Notification[] = [
    {
      id: '1',
      user: {
        name: 'Kwasi Jones',
        username: '@kwasi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      type: 'like',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      timestamp: '09:45 AM',
      isRead: false,
    },
    {
      id: '2',
      user: {
        name: 'Kiyani Sam',
        username: '@kiyani',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      type: 'comment',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      timestamp: 'Yesterday',
      isRead: true,
    },
    {
      id: '3',
      user: {
        name: 'AAOBA',
        username: '@aaoba',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/ACCRA_ACADEMY_CREST.jpg/1200px-ACCRA_ACADEMY_CREST.jpg',
      },
      type: 'follow',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      timestamp: 'Feb 25',
      isRead: true,
    },
    {
      id: '4',
      user: {
        name: 'AAOBA',
        username: '@aaoba',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/ACCRA_ACADEMY_CREST.jpg/1200px-ACCRA_ACADEMY_CREST.jpg',
      },
      type: 'mention',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      timestamp: 'Feb 26',
      isRead: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <View className="w-6 h-6 bg-red-500 rounded-full items-center justify-center">
          <Ionicons name="heart" size={14} color="white" />
        </View>;
      case 'comment':
        return <View className="w-6 h-6 bg-blue-500 rounded-full items-center justify-center">
          <Ionicons name="chatbubble" size={12} color="white" />
        </View>;
      case 'follow':
        return <View className="w-6 h-6 bg-green-500 rounded-full items-center justify-center">
          <Ionicons name="person-add" size={12} color="white" />
        </View>;
      case 'mention':
        return <View className="w-6 h-6 bg-yellow-500 rounded-full items-center justify-center">
          <Ionicons name="at" size={12} color="white" />
        </View>;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      <ScrollView className="flex-1">
         <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16 }}
>
  <View className="flex-row mt-2 items-center py-4">
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        className={`px-4 py-3 rounded-xl mr-2 ${
          activeTab === tab ? 'bg-yellow-500' : 'border border-gray-200'
        }`}
        onPress={() => setActiveTab(tab)}
      >
        <Text
          style={{ fontFamily: "Gilroy-Regular" }}
          className={`text-md font-medium ${
            activeTab === tab ? 'text-black' : 'text-black'
          }`}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
         </ScrollView>
      
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            className={`px-4 py-4 border-b border-gray-100 ${
              !notification.isRead ? 'bg-blue-50' : 'bg-white'
            }`}
          >
            <View className="flex-row">
              <View className="relative mr-3">
                <Image
                  source={{ uri: notification.user.avatar }}
                  className="w-12 h-12 rounded-full"
                />
                <View className="absolute -bottom-1 -right-1">
                  {getNotificationIcon(notification.type)}
                </View>
              </View>
              
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <View className="flex-row items-center">
                    <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="font-semibold text-black text-lg mr-2">{notification.user.name}</Text>
                    <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-md">{notification.user.username}</Text>
                  </View>
                  <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-md">{notification.timestamp}</Text>
                </View>

                <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-600 text-md leading-5" numberOfLines={3}>
                  {notification.content}
                </Text>
                
                {!notification.isRead && (
                  <View className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

export default Notification;