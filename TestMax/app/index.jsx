import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';

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
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <SafeAreaView className="flex-1">
        <Animated.View 
          className="flex-1 px-8"
          style={{ opacity: fadeAnim }}
        >
          {/* Logo Section */}
          <View className="items-center mt-20 mb-16">
            <View className="w-20 h-20 bg-blue-50 rounded-2xl items-center justify-center border border-blue-100 shadow-sm shadow-blue-100">
              <Text className="text-blue-500 text-4xl font-bold">T+</Text>
            </View>
          </View>

          {/* Title Section */}
          <View className="items-center mb-6">
            <Text className="text-slate-800 text-4xl font-bold text-center mb-3">
              Welcome to TestMax
            </Text>
            <Text className="text-slate-600 text-xl text-center">
              Starting today, let's focus better and accomplish your dreams.
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="mt-auto mb-10 space-y-6">
            <TouchableOpacity 
              className="w-full bg-blue-500 py-4 rounded-full items-center shadow-sm shadow-blue-200 active:bg-blue-600"
              onPress={() => router.push('/(onboarding)/onboarding_1')}
            >
              <Text className="text-white text-lg font-medium">
                Get Started
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="items-center"
              onPress={() => router.push('/modal/signin_modal')}
            >
              <Text className="text-slate-600 text-lg">
                Already have an account?
              </Text>
            </TouchableOpacity>
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
