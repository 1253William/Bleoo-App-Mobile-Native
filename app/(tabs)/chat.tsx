import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ChatMessage {
  id: string;
  text: string;
  isOwn: boolean;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi there!',
      isOwn: false,
      timestamp: '09:45 AM',
    },
    {
      id: '2',
      text: 'Hey, good!',
      isOwn: true,
      timestamp: '09:46 AM',
    },
    {
      id: '3',
      text: 'Thank God',
      isOwn: true,
      timestamp: '09:46 AM',
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: message,
        isOwn: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Header */}
      <View className="bg-blue-700 px-4 py-4 flex-row items-center">
        <TouchableOpacity className="mr-3">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' }}
          className="w-8 h-8 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-white font-semibold">Kwasi Jones</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        className="flex-1" 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView className="flex-1 px-4 py-4">
          {messages.map((msg) => (
            <View
              key={msg.id}
              className={`mb-3 ${msg.isOwn ? 'items-end' : 'items-start'}`}
            >
              <View
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.isOwn 
                    ? 'bg-blue-600 rounded-br-sm' 
                    : 'bg-gray-200 rounded-bl-sm'
                }`}
              >
                <Text className={msg.isOwn ? 'text-white' : 'text-black'}>
                  {msg.text}
                </Text>
              </View>
              <Text className="text-xs text-gray-500 mt-1">{msg.timestamp}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Message Input */}
        <View className="flex-row items-center px-4 py-3 border-t border-gray-200">
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-4 py-2">
            <TextInput
              className="flex-1 text-base"
              placeholder="Type your message..."
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity className="ml-2">
              <Ionicons name="happy-outline" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity className="ml-2">
              <Ionicons name="attach-outline" size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            className="ml-3 w-10 h-10 bg-blue-600 rounded-full items-center justify-center"
            onPress={sendMessage}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;