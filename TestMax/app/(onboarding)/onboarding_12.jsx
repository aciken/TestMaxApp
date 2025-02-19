import { View, Text, TouchableOpacity, SafeAreaView, Animated, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingTwelve() {
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
        <ScrollView 
          className="flex-1 px-8"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* Results Section */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            className="mt-8"
          >
            <Text className="text-slate-800 text-3xl font-bold text-center mb-3">
              Your Results
            </Text>
            <Text className="text-slate-600 text-base text-center mb-8">
              Based on your profile, here's your estimated testosterone level and optimization potential
            </Text>

            {/* Current Level */}
            <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-blue-50">
              <Text className="text-slate-600 text-center mb-2">Estimated Current Level</Text>
              <View className="flex-row items-baseline justify-center">
                <Text className="text-slate-800 text-4xl font-bold">450</Text>
                <Text className="text-slate-600 text-lg ml-2">ng/dL</Text>
              </View>
              <Text className="text-slate-500 text-sm text-center mt-2">Below optimal range</Text>
            </View>

            {/* Potential Level */}
            <View className="bg-blue-50 rounded-2xl p-6 mb-8">
              <Text className="text-slate-600 text-center mb-2">2-Month Target Level</Text>
              <View className="flex-row items-baseline justify-center">
                <Text className="text-blue-600 text-4xl font-bold">650-800</Text>
                <Text className="text-slate-600 text-lg ml-2">ng/dL</Text>
              </View>
              <Text className="text-slate-500 text-sm text-center mt-2">Optimal range for your age</Text>
            </View>

            {/* Key Focus Areas */}
            <View className="space-y-3">
              <Text className="text-slate-800 font-semibold mb-2">Your Key Focus Areas:</Text>
              <FocusArea icon="barbell" text="Strength Training: 4x per week" />
              <FocusArea icon="nutrition" text="Protein Intake: 180g daily" />
              <FocusArea icon="moon" text="Sleep Optimization: 7-9 hours" />
              <FocusArea icon="sunny" text="Vitamin D: 5000 IU daily" />
            </View>
          </Animated.View>
        </ScrollView>

        {/* Start Button - Moved outside ScrollView */}
        <View className="px-8 py-6 bg-white/80 backdrop-blur-sm border-t border-blue-50">
          <TouchableOpacity 
            className="w-full py-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex-row items-center justify-center space-x-2"
            onPress={() => router.push('/(tabs)/Home')}
          >
            <Text className="text-white text-xl font-semibold">Start Now</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-slate-500 text-sm text-center mt-4">
            Your personalized plan is ready
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const FocusArea = ({ icon, text }) => (
  <View className="flex-row items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-blue-50">
    <View className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center">
      <Ionicons name={icon} size={18} color="#3b82f6" />
    </View>
    <Text className="text-slate-700 flex-1">{text}</Text>
  </View>
); 