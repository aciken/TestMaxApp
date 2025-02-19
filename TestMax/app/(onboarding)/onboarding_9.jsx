import { View, Text, TouchableOpacity, SafeAreaView, Animated, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingNine() {
  const [selectedSupplements, setSelectedSupplements] = useState([]);
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

  const toggleSupplement = (id) => {
    if (selectedSupplements.includes(id)) {
      setSelectedSupplements(selectedSupplements.filter(item => item !== id));
    } else {
      setSelectedSupplements([...selectedSupplements, id]);
    }
  };

  const supplements = [
    {
      id: 'vitamind',
      title: 'Vitamin D',
      description: 'Sunshine vitamin',
      icon: 'sunny',
    },
    {
      id: 'zinc',
      title: 'Zinc',
      description: 'Mineral supplement',
      icon: 'fitness',
    },
    {
      id: 'magnesium',
      title: 'Magnesium',
      description: 'Recovery mineral',
      icon: 'moon',
    },
    {
      id: 'omega3',
      title: 'Omega-3',
      description: 'Fish oil/DHA/EPA',
      icon: 'water',
    },
    {
      id: 'none',
      title: 'No Supplements',
      description: 'Not taking any currently',
      icon: 'close-circle',
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
              style={{ width: '90%' }}
            />
          </View>
          <Text className="text-slate-400 text-xs mt-2">9 of 10</Text>
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
              Current Supplements
            </Text>
            <Text className="text-slate-600 text-base text-center">
              Select all supplements you're currently taking
            </Text>
          </Animated.View>

          {/* Supplements Selection */}
          <Animated.View
            style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
            className="flex-1"
          >
            <ScrollView 
              className="space-y-3" 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {supplements.map((supplement) => (
                <TouchableOpacity 
                  key={supplement.id}
                  className={`bg-white p-4 rounded-2xl flex-row items-center shadow-sm border ${
                    selectedSupplements.includes(supplement.id) ? 'border-blue-500' : 'border-blue-50'
                  }`}
                  onPress={() => toggleSupplement(supplement.id)}
                >
                  <View className={`w-10 h-10 rounded-xl items-center justify-center ${
                    selectedSupplements.includes(supplement.id) ? 'bg-blue-50' : 'bg-slate-50'
                  }`}>
                    <Ionicons 
                      name={supplement.icon} 
                      size={20} 
                      color={selectedSupplements.includes(supplement.id) ? '#3b82f6' : '#94a3b8'} 
                    />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className={`font-medium ${
                      selectedSupplements.includes(supplement.id) ? 'text-slate-900' : 'text-slate-600'
                    }`}>{supplement.title}</Text>
                    <Text className="text-slate-500 text-sm mt-0.5">
                      {supplement.description}
                    </Text>
                  </View>
                  {selectedSupplements.includes(supplement.id) && (
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
              Select multiple if you're taking more than one supplement
            </Text>
          </View>

          {/* Continue Button */}
          <View className="mt-auto mb-6">
            <TouchableOpacity 
              className={`w-full py-4 rounded-full flex-row items-center justify-center space-x-2 ${
                selectedSupplements.length > 0 ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-slate-200'
              }`}
              onPress={() => selectedSupplements.length > 0 && router.push('/onboarding_10')}
              disabled={selectedSupplements.length === 0}
            >
              <Text className={`text-lg font-medium ${
                selectedSupplements.length > 0 ? 'text-white' : 'text-slate-400'
              }`}>Continue</Text>
              <Ionicons 
                name="arrow-forward" 
                size={20} 
                color={selectedSupplements.length > 0 ? 'white' : '#94a3b8'} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
} 