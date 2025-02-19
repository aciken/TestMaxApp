import { View, Text, TouchableOpacity, SafeAreaView, Animated, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingThree() {
  const [age, setAge] = useState('');
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

  const isValidAge = age && parseInt(age) >= 18 && parseInt(age) <= 100;

  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1">
          {/* Progress Bar */}
          <View className="px-6 pt-4">
            <View className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <View 
                className="h-full bg-blue-500 rounded-full" 
                style={{ width: '30%' }} // 3rd question out of 10
              />
            </View>
            <Text className="text-slate-400 text-xs mt-2">3 of 10</Text>
          </View>

          {/* Header with Back Button */}
          <View className="px-6 py-4">
            <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl items-center justify-center shadow-sm shadow-blue-100 border border-blue-50"
            >
              <Ionicons name="arrow-back" size={20} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 px-8">
            {/* Title Section */}
            <Animated.View
              style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
              className="mb-12"
            >
              <Text className="text-slate-800 text-3xl font-bold text-center mb-3">
                What's Your Age?
              </Text>
              <Text className="text-slate-600 text-base text-center">
                Your age helps us tailor hormone optimization strategies specifically for you
              </Text>
            </Animated.View>

            {/* Age Input */}
            <Animated.View
              style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            >
              <View className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
                <View className="flex-row items-center justify-center space-x-4">
                  <TextInput
                    className="text-center text-4xl font-bold text-slate-800 w-24"
                    placeholder="00"
                    placeholderTextColor="#cbd5e1"
                    keyboardType="number-pad"
                    maxLength={2}
                    value={age}
                    onChangeText={setAge}
                  />
                  <Text className="text-slate-400 text-xl">years</Text>
                </View>
              </View>

              {/* Age Range Info */}
              <View className="mt-4 flex-row justify-center">
                <Text className="text-slate-500 text-sm">
                  {isValidAge ? 'Valid age range: 18-100' : 'Please enter a valid age (18-100)'}
                </Text>
              </View>

              {/* Age Groups Info */}
              <View className="mt-8 space-y-3">
                <View className="flex-row items-center space-x-3">
                  <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center">
                    <Ionicons name="fitness" size={20} color="#3b82f6" />
                  </View>
                  <Text className="text-slate-600 flex-1">
                    Personalized hormone optimization strategies based on age group
                  </Text>
                </View>
                <View className="flex-row items-center space-x-3">
                  <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center">
                    <Ionicons name="trending-up" size={20} color="#3b82f6" />
                  </View>
                  <Text className="text-slate-600 flex-1">
                    Age-specific recommendations for maximum results
                  </Text>
                </View>
              </View>
            </Animated.View>

            {/* Continue Button */}
            <View className="mt-auto mb-6">
              <TouchableOpacity 
                className={`w-full py-4 rounded-full flex-row items-center justify-center space-x-2 ${
                  isValidAge ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-slate-200'
                }`}
                onPress={() => isValidAge && router.push('/onboarding_4')}
                disabled={!isValidAge}
              >
                <Text className={`text-lg font-medium ${
                  isValidAge ? 'text-white' : 'text-slate-400'
                }`}>Continue</Text>
                <Ionicons 
                  name="arrow-forward" 
                  size={20} 
                  color={isValidAge ? 'white' : '#94a3b8'} 
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
}
