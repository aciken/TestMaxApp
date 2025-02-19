import { View, Text, TouchableOpacity, SafeAreaView, Animated, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingTen() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
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

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const symptoms = [
    {
      id: 'fatigue',
      title: 'Low Energy',
      description: 'Feeling tired frequently',
      icon: 'battery-dead',
    },
    {
      id: 'muscle',
      title: 'Muscle Loss',
      description: 'Difficulty gaining muscle',
      icon: 'barbell',
    },
    {
      id: 'mood',
      title: 'Mood Changes',
      description: 'Irritability or depression',
      icon: 'sad',
    },
    {
      id: 'libido',
      title: 'Low Libido',
      description: 'Decreased sex drive',
      icon: 'heart',
    },
    {
      id: 'focus',
      title: 'Poor Focus',
      description: 'Difficulty concentrating',
      icon: 'brain',
    },
    {
      id: 'none',
      title: 'No Symptoms',
      description: 'Feeling generally good',
      icon: 'checkmark-circle',
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
              style={{ width: '100%' }}
            />
          </View>
          <Text className="text-slate-400 text-xs mt-2">10 of 10</Text>
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
              Current Symptoms
            </Text>
            <Text className="text-slate-600 text-base text-center">
              Select any symptoms you're experiencing
            </Text>
          </Animated.View>

          {/* Symptoms Selection */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            className="flex-1"
          >
            <ScrollView 
              className="space-y-3" 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {symptoms.map((symptom) => (
                <TouchableOpacity 
                  key={symptom.id}
                  className={`bg-white p-4 rounded-2xl flex-row items-center shadow-sm border ${
                    selectedSymptoms.includes(symptom.id) ? 'border-blue-500' : 'border-blue-50'
                  }`}
                  onPress={() => toggleSymptom(symptom.id)}
                >
                  <View className={`w-10 h-10 rounded-xl items-center justify-center ${
                    selectedSymptoms.includes(symptom.id) ? 'bg-blue-50' : 'bg-slate-50'
                  }`}>
                    <Ionicons 
                      name={symptom.icon} 
                      size={20} 
                      color={selectedSymptoms.includes(symptom.id) ? '#3b82f6' : '#94a3b8'} 
                    />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className={`font-medium ${
                      selectedSymptoms.includes(symptom.id) ? 'text-slate-900' : 'text-slate-600'
                    }`}>{symptom.title}</Text>
                    <Text className="text-slate-500 text-sm mt-0.5">
                      {symptom.description}
                    </Text>
                  </View>
                  {selectedSymptoms.includes(symptom.id) && (
                    <View className="w-6 h-6 bg-blue-50 rounded-full items-center justify-center">
                      <Ionicons name="checkmark" size={14} color="#3b82f6" />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>

          {/* Info Note */}
          <View className="bg-blue-50 p-4 rounded-xl mb-6">
            <Text className="text-slate-600 text-sm text-center">
              This helps us create a personalized optimization plan
            </Text>
          </View>

          {/* Continue Button */}
          <View className="mt-auto mb-6">
            <TouchableOpacity 
              className={`w-full py-4 rounded-full flex-row items-center justify-center space-x-2 ${
                selectedSymptoms.length > 0 ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-slate-200'
              }`}
              onPress={() => selectedSymptoms.length > 0 && router.push('/onboarding_11')}
              disabled={selectedSymptoms.length === 0}
            >
              <Text className={`text-lg font-medium ${
                selectedSymptoms.length > 0 ? 'text-white' : 'text-slate-400'
              }`}>Complete</Text>
              <Ionicons 
                name="checkmark" 
                size={20} 
                color={selectedSymptoms.length > 0 ? 'white' : '#94a3b8'} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
} 