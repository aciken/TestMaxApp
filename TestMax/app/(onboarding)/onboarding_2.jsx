import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingTwo() {
  const [selectedGender, setSelectedGender] = useState(null);
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
        {/* Progress Bar */}
        <View className="px-6 pt-4">
          <View className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <View 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: '20%' }} // 2nd question out of 10
            />
          </View>
          <Text className="text-slate-400 text-xs mt-2">2 of 10</Text>
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
              Select Your Gender
            </Text>
            <Text className="text-slate-600 text-base text-center">
              This helps us provide personalized recommendations for your hormone optimization
            </Text>
          </Animated.View>

          {/* Gender Selection */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            className="space-y-4"
          >
            <TouchableOpacity 
              className={`bg-white p-6 rounded-2xl flex-row items-center shadow-sm border ${
                selectedGender === 'male' ? 'border-blue-500' : 'border-blue-50'
              }`}
              onPress={() => setSelectedGender('male')}
            >
              <View className={`w-12 h-12 rounded-xl items-center justify-center ${
                selectedGender === 'male' ? 'bg-blue-50' : 'bg-slate-50'
              }`}>
                <Ionicons 
                  name="male" 
                  size={24} 
                  color={selectedGender === 'male' ? '#3b82f6' : '#94a3b8'} 
                />
              </View>
              <View className="ml-4 flex-1">
                <Text className={`font-medium ${
                  selectedGender === 'male' ? 'text-slate-900' : 'text-slate-600'
                }`}>Male</Text>
                <Text className="text-slate-500 text-sm mt-1">
                  Optimize testosterone levels
                </Text>
              </View>
              {selectedGender === 'male' && (
                <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              className={`bg-white p-6 rounded-2xl flex-row items-center shadow-sm border ${
                selectedGender === 'female' ? 'border-blue-500' : 'border-blue-50'
              }`}
              onPress={() => setSelectedGender('female')}
            >
              <View className={`w-12 h-12 rounded-xl items-center justify-center ${
                selectedGender === 'female' ? 'bg-blue-50' : 'bg-slate-50'
              }`}>
                <Ionicons 
                  name="female" 
                  size={24} 
                  color={selectedGender === 'female' ? '#3b82f6' : '#94a3b8'} 
                />
              </View>
              <View className="ml-4 flex-1">
                <Text className={`font-medium ${
                  selectedGender === 'female' ? 'text-slate-900' : 'text-slate-600'
                }`}>Female</Text>
                <Text className="text-slate-500 text-sm mt-1">
                  Balance hormonal health
                </Text>
              </View>
              {selectedGender === 'female' && (
                <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
              )}
            </TouchableOpacity>
          </Animated.View>

          {/* Continue Button */}
          <View className="mt-auto mb-6">
            <TouchableOpacity 
              className={`w-full py-4 rounded-full flex-row items-center justify-center space-x-2 ${
                selectedGender ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-slate-200'
              }`}
              onPress={() => selectedGender && router.push('/onboarding_3')}
              disabled={!selectedGender}
            >
              <Text className={`text-lg font-medium ${
                selectedGender ? 'text-white' : 'text-slate-400'
              }`}>Continue</Text>
              <Ionicons 
                name="arrow-forward" 
                size={20} 
                color={selectedGender ? 'white' : '#94a3b8'} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
