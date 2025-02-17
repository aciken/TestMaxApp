import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomePage() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View className="flex-1 bg-gray-950">
      <StatusBar style="light" />
      
      {/* Content */}
      <SafeAreaView className="flex-1">
        <Animated.View 
          className="flex-1 px-8 justify-between py-20"
          style={{ opacity: fadeAnim }}
        >
          {/* Logo Section */}
          <View className="items-center">
            <View className="w-24 h-24 bg-blue-500/20 rounded-3xl items-center justify-center mb-6 border border-blue-500/30">
              <Text className="text-blue-400 text-4xl font-bold">T+</Text>
            </View>
          </View>

          {/* Title Section */}
          <View className="items-center">
            <Text className="text-white text-5xl font-bold mb-3">
              optimize
            </Text>
            <Text className="text-white/80 text-5xl font-bold mb-3">
              naturally
            </Text>
            <Text className="text-blue-400 text-lg">
              your testosterone levels
            </Text>
          </View>

          {/* Sign In Buttons */}
          <View className="space-y-4 w-full">
            <TouchableOpacity 
              className="w-full bg-blue-500 py-4 rounded-full flex-row items-center justify-center space-x-3 shadow-lg active:bg-blue-600"
              onPress={() => {/* Handle Apple sign in */}}
            >
              <Ionicons name="logo-apple" size={22} color="white" />
              <Text className="text-white text-base font-semibold">
                Sign in with Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="w-full border border-gray-800 bg-gray-900 py-4 rounded-full flex-row items-center justify-center space-x-3 active:bg-gray-800"
              onPress={() => router.push('/Home')}
            >
              <Ionicons name="logo-google" size={20} color="white" />
              <Text className="text-white text-base font-semibold">
                Sign in with Google
              </Text>
            </TouchableOpacity>

            {/* Terms Text */}
            <View className="mt-6">
              <Text className="text-gray-400 text-center text-sm">
                By signing up, you agree to our
              </Text>
              <View className="flex-row justify-center space-x-1">
                <Text className="text-blue-400 text-sm">Terms of Use</Text>
                <Text className="text-gray-400 text-sm">and</Text>
                <Text className="text-blue-400 text-sm">Privacy Policy</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const FeatureItem = ({ gradient, title, description, icon }) => (
  <View className="flex-row items-start space-x-4">
    <LinearGradient
      colors={gradient}
      className="w-10 h-10 rounded-xl items-center justify-center shadow-md"
      style={{ elevation: 3 }}
    >
      {icon}
    </LinearGradient>
    <View className="flex-1">
      <Text className="text-base font-medium text-gray-900 mb-1">{title}</Text>
      <Text className="text-gray-600 text-sm leading-5">{description}</Text>
    </View>
  </View>
);
