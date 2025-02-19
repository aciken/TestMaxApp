import { View, Text, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingEleven() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Continuous spinning animation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate to next screen after 10 seconds
    const timer = setTimeout(() => {
      router.push('/onboarding_12');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <SafeAreaView className="flex-1">
        <Animated.View 
          className="flex-1 items-center justify-center px-8"
          style={{ opacity: fadeAnim }}
        >
          {/* Spinning Icon with Glow */}
          <Animated.View 
            className="mb-8"
            style={{ 
              transform: [
                { rotate: spin },
                { scale: pulseAnim }
              ]
            }}
          >
            <View className="w-24 h-24 bg-blue-500/10 rounded-3xl items-center justify-center">
              <View className="w-20 h-20 bg-blue-50 rounded-2xl items-center justify-center shadow-lg shadow-blue-200">
                <Ionicons name="pulse" size={40} color="#3b82f6" />
              </View>
            </View>
          </Animated.View>

          {/* Text Section */}
          <Text className="text-slate-800 text-3xl font-bold text-center mb-3">
            Creating Your Plan
          </Text>
          <Text className="text-slate-600 text-base text-center">
            Analyzing your data and generating a personalized testosterone optimization protocol
          </Text>

          {/* Processing Steps */}
          <View className="mt-12 space-y-4 w-full">
            <ProcessingStep 
              delay={2000} 
              text="Analyzing health markers..." 
              icon="analytics"
            />
            <ProcessingStep 
              delay={4000} 
              text="Calculating optimal ranges..." 
              icon="calculator"
            />
            <ProcessingStep 
              delay={6000} 
              text="Generating recommendations..." 
              icon="bulb"
            />
            <ProcessingStep 
              delay={8000} 
              text="Finalizing your protocol..." 
              icon="checkmark-circle"
            />
          </View>

          {/* Loading Bar */}
          <View className="absolute bottom-12 w-full px-8">
            <View className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <Animated.View 
                className="h-full bg-blue-500 rounded-full"
                style={{
                  width: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%']
                  }),
                }}
              />
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const ProcessingStep = ({ delay, text, icon }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
  }, []);

  return (
    <Animated.View 
      className="flex-row items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50"
      style={{ 
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }}
    >
      <View className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center">
        <Ionicons name={icon} size={18} color="#3b82f6" />
      </View>
      <Text className="text-slate-700 flex-1">{text}</Text>
    </Animated.View>
  );
}; 