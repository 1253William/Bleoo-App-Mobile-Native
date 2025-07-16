import { icons } from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: any) => {
  const indicatorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(indicatorAnim, {
      toValue: focused ? 1 : 0,
      duration: 300,
      useNativeDriver: false, // Using layout props (opacity, scaleX)
    }).start();
  }, [focused]);

  const indicatorStyle = {
    opacity: indicatorAnim,
    transform: [
      {
        scaleX: indicatorAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
      {
        translateY: indicatorAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0], // slides up smoothly
        }),
      },
    ],
  };

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full bg-white" >
      <Image
        source={icon}
        tintColor={focused ? '#002D69' : '#000'}
        className="size-6 mb-1"
      />
      <Animated.View
        style={[
          {
            width: 24,
            height: 4,
            borderRadius: 9999,
            backgroundColor: '#002D69',
          },
          indicatorStyle,
        ]}
      />
    </View>
  );
};


const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          width: '90%',
          alignSelf: 'center',
         
          overflow: 'hidden',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
       
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerBackground: () => (
            <View className="bg-[#002D69] h-32 absolute w-full" />
          ),
          title: 'HOME',
          headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: '#fff',
          },
          headerLeft: () => (
      <TouchableOpacity onPress={() => console.log("Settings pressed")} className="ml-4">
        <Ionicons name="settings-outline" size={24} color="#fff" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => console.log("Profile pressed")} className="mr-4">
        <Image
          source={{ uri: "https://plus.unsplash.com/premium_photo-1747504296823-71ded9ee2b15?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} // replace with your avatar URL
          className="w-8 h-8 rounded-full"
        />
      </TouchableOpacity>
    ),
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title='HOME' />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          headerBackground: () => (
            <View className="bg-[#002D69] h-32 absolute w-full" />
          ),
          title: 'SEARCH',
          headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: '#fff',
          },
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title='SEARCH' />
          ),
        }}
      />
      <Tabs.Screen
      name='chat'
        options={{
          headerBackground: () => (
            <View className="bg-[#002D69] h-32 absolute w-full" />
          ),
          title: 'CHAT',
          headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: '#fff',
          },
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.chat} title='CHAT' />
          ),
        }}
      />
      <Tabs.Screen
        name='community'
        options={{
          headerBackground: () => (
            <View className="bg-[#002D69] h-32 absolute w-full" />
          ),
          title: 'COMMUNITY',
           headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: '#fff',
          },
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title='COMMUNITY' />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          headerBackground: () => (
            <View className="bg-[#002D69] h-32 absolute w-full" />
          ),
          title: 'NOTIFICATIONS',
          headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: '#fff',
          },
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bell} title='NOTIFICATIONS' />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout

const styles = StyleSheet.create({})