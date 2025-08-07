import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface JoinRequestsScreenProps {
  navigation?: any;
}

const JoinRequestsScreen: React.FC<JoinRequestsScreenProps> = ({ navigation }) => {
  const joinRequests = [
    {
      id: '1',
      user: {
        name: 'Jasmine Joy',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      },
    },
    {
      id: '2',
      user: {
        name: 'Jasmine Joy',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      },
    },
  ];

  const handleAccept = (userId: string) => {
    console.log('Accept user:', userId);
  };

  const handleDecline = (userId: string) => {
    console.log('Decline user:', userId);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-lg font-semibold ml-4">Join Requests</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        {joinRequests.map((request) => (
          <View key={request.id} className="flex-row items-center justify-between py-4 border-b border-gray-100">
            <View className="flex-row items-center flex-1">
              <Image
                source={{ uri: request.user.avatar }}
                className="w-12 h-12 rounded-full mr-3"
              />
              <Text style={{fontFamily: 'Gilroy-SemiBold'}} className="text-base font-semibold text-black">
                {request.user.name}
              </Text>
            </View>

            <View className="flex-row items-center">
              <TouchableOpacity 
                onPress={() => handleAccept(request.id)}
                className="w-8 h-8 bg-green-500 rounded-full items-center justify-center mr-3"
              >
                <Ionicons name="checkmark" size={16} color="white" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => handleDecline(request.id)}
                className="w-8 h-8 bg-red-500 rounded-full items-center justify-center"
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default JoinRequestsScreen;
