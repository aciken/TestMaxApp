import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingOne() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-8">
          {/* Icon Section */}
          <Animated.View 
            className="items-center mt-8 mb-12"
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
          >
            <View className="w-24 h-24 bg-blue-50 rounded-3xl items-center justify-center border border-blue-100 shadow-sm shadow-blue-100">
              <Ionicons name="fitness" size={48} color="#3b82f6" />
            </View>
          </Animated.View>

          {/* Content */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
          >
            <Text className="text-slate-800 text-4xl font-bold text-center mb-4">
              Optimize Your{'\n'}Testosterone Naturally
            </Text>
            
            <Text className="text-slate-600 text-lg text-center mb-8">
              Track, analyze, and improve your testosterone levels through proven natural methods.
            </Text>

            {/* Feature List */}
            <View>
              <FeatureItem 
                icon="analytics-outline"
                title="Track Progress"
                description="Monitor your levels and see improvements over time"
              />
              <View className="mb-4" />
              <FeatureItem 
                icon="nutrition-outline"
                title="Personalized Plans"
                description="Get customized recommendations based on your goals"
              />
              <View className="mb-4" />
              <FeatureItem 
                icon="trending-up-outline"
                title="Natural Methods"
                description="Evidence-based strategies for optimal hormone health"
              />
            </View>
          </Animated.View>

          {/* Next Button */}
          <View className="mt-auto mb-6">
            <TouchableOpacity 
              className="w-full bg-blue-500 py-4 rounded-full flex-row items-center justify-center space-x-2 shadow-sm shadow-blue-200"
              onPress={() => router.push('/onboarding_2')}
            >
              <Text className="text-white text-lg font-medium">Next</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const FeatureItem = ({ icon, title, description }) => (
  <View className="flex-row items-start space-x-4">
    <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center shadow-sm shadow-blue-100 border border-blue-50">
      <Ionicons name={icon} size={20} color="#3b82f6" />
    </View>
    <View className="flex-1">
      <Text className="text-slate-800 font-medium mb-1">{title}</Text>
      <Text className="text-slate-600 text-sm">{description}</Text>
    </View>
  </View>
);
