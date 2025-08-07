import { Ionicons } from '@expo/vector-icons';
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

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trends = [
    { id: '1', hashtag: '#SIC Wave', category: 'Trending' },
    { id: '2', hashtag: '#Aftermint', category: 'Technology' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Search Bar */}
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

      <ScrollView className="flex-1 px-4">
        {/* Trends Section */}
        <View className="mt-4">
          <Text style={{ fontFamily: "Gilroy-SemiBold" }} className="text-lg font-semibold text-black mb-4">Trends for You</Text>
          
          {trends.map((trend) => (
            <TouchableOpacity key={trend.id} className="py-3 border-b border-gray-100">
              <Text style={{ fontFamily: "Gilroy-Medium" }} className="text-blue-600 font-semibold text-lg">{trend.hashtag}</Text>
              <Text style={{ fontFamily: "Gilroy-Regular" }} className="text-gray-500 text-lg mt-1">{trend.category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;