import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingSix() {
  const [selectedSleep, setSelectedSleep] = useState(null);
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

  const sleepPatterns = [
    {
      id: 'optimal',
      title: '8+ Hours',
      description: 'Consistent sleep schedule',
      icon: 'moon',
    },
    {
      id: 'adequate',
      title: '6-7 Hours',
      description: 'Moderate sleep quality',
      icon: 'bed',
    },
    {
      id: 'irregular',
      title: 'Irregular Sleep',
      description: 'Inconsistent schedule',
      icon: 'time',
    },
    {
      id: 'poor',
      title: 'Poor Sleep',
      description: 'Less than 6 hours',
      icon: 'alert-circle',
    },
  ];

  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <SafeAreaView className="flex-1">
        {/* Progress Bar */}
        <View className="px-6 pt-3">
          <View className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <View 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: '60%' }} // 6th question out of 10
            />
          </View>
          <Text className="text-slate-400 text-xs mt-2">6 of 10</Text>
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
            className="mb-8"
          >
            <Text className="text-slate-800 text-3xl font-bold text-center mb-3">
              Sleep Quality
            </Text>
            <Text className="text-slate-600 text-base text-center">
              How would you describe your typical sleep pattern?
            </Text>
          </Animated.View>

          {/* Sleep Pattern Selection */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            className="space-y-3"
          >
            {sleepPatterns.map((pattern) => (
              <TouchableOpacity 
                key={pattern.id}
                className={`bg-white p-4 rounded-2xl flex-row items-center shadow-sm border ${
                  selectedSleep === pattern.id ? 'border-blue-500' : 'border-blue-50'
                }`}
                onPress={() => setSelectedSleep(pattern.id)}
              >
                <View className={`w-10 h-10 rounded-xl items-center justify-center ${
                  selectedSleep === pattern.id ? 'bg-blue-50' : 'bg-slate-50'
                }`}>
                  <Ionicons 
                    name={pattern.icon} 
                    size={20} 
                    color={selectedSleep === pattern.id ? '#3b82f6' : '#94a3b8'} 
                  />
                </View>
                <View className="ml-3 flex-1">
                  <Text className={`font-medium ${
                    selectedSleep === pattern.id ? 'text-slate-900' : 'text-slate-600'
                  }`}>{pattern.title}</Text>
                  <Text className="text-slate-500 text-sm mt-0.5">
                    {pattern.description}
                  </Text>
                </View>
                {selectedSleep === pattern.id && (
                  <View className="w-6 h-6 bg-blue-50 rounded-full items-center justify-center">
                    <Ionicons name="checkmark" size={14} color="#3b82f6" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </Animated.View>

          {/* Sleep Info */}
          <View className="mt-6 bg-blue-50 p-4 rounded-xl">
            <Text className="text-slate-600 text-sm text-center">
              Quality sleep is crucial for optimal testosterone production and recovery
            </Text>
          </View>

          {/* Continue Button */}
          <View className="mt-auto mb-6">
            <TouchableOpacity 
              className={`w-full py-4 rounded-full flex-row items-center justify-center space-x-2 ${
                selectedSleep ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-slate-200'
              }`}
              onPress={() => selectedSleep && router.push('/onboarding_7')}
              disabled={!selectedSleep}
            >
              <Text className={`text-lg font-medium ${
                selectedSleep ? 'text-white' : 'text-slate-400'
              }`}>Continue</Text>
              <Ionicons 
                name="arrow-forward" 
                size={20} 
                color={selectedSleep ? 'white' : '#94a3b8'} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
