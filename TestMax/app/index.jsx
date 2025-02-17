import { View, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const ChartIcon = () => (
  <View className="w-4 h-4 flex-row items-center justify-center">
    <View className="w-1 h-4 bg-white/90 rounded-sm" />
    <View className="w-1 h-2 bg-white/90 rounded-sm mx-0.5" />
    <View className="w-1 h-3 bg-white/90 rounded-sm" />
  </View>
);

const AnalyticsIcon = () => (
  <View className="w-4 h-4">
    <View className="absolute w-4 h-4 border-2 border-white/90 rounded-sm" />
    <View className="absolute bottom-1 right-1 w-2 h-2 bg-white/90 rounded-sm" />
  </View>
);

const PersonalizedIcon = () => (
  <View className="w-4 h-4 items-center justify-center">
    <View className="absolute w-3 h-3 border-2 border-white/90 rotate-45" />
    <View className="absolute w-1.5 h-1.5 bg-white/90 rounded-full" />
  </View>
);

export default function WelcomePage() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <LinearGradient
        colors={['rgba(219, 234, 254, 0.3)', 'rgba(255, 255, 255, 0)']}
        className="absolute w-full h-96"
      />
      
      <Animated.View 
        className="flex-1 px-6 justify-between"
        style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
      >
        {/* Top Section */}
        <View className="items-center mt-16">
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            className="w-20 h-20 mb-6 rounded-2xl items-center justify-center shadow-lg"
            style={{ elevation: 5 }}
          >
            <Text className="text-white text-3xl font-bold">TM</Text>
          </LinearGradient>
          <Text className="text-4xl font-bold text-gray-900 mb-3">
            TestMax
          </Text>
          <Text className="text-base text-gray-600 text-center max-w-[280px] leading-5">
            Professional testosterone monitoring and optimization platform
          </Text>
        </View>

        {/* Middle Section - Features */}
        <View className="py-10">
          <View className="space-y-8">
            <FeatureItem 
              gradient={['#60A5FA', '#3B82F6']}
              title="Track & Monitor"
              description="Comprehensive tracking of key health markers"
              icon={<ChartIcon />}
            />
            <FeatureItem 
              gradient={['#818CF8', '#6366F1']}
              title="Professional Analysis"
              description="Expert-driven insights and recommendations"
              icon={<AnalyticsIcon />}
            />
            <FeatureItem 
              gradient={['#93C5FD', '#60A5FA']}
              title="Personalized Plans"
              description="Customized optimization strategies"
              icon={<PersonalizedIcon />}
            />
          </View>
        </View>

        {/* Bottom Section - Buttons */}
        <View className="space-y-4 mb-10">
            <TouchableOpacity className="shadow-lg">
              <LinearGradient
                colors={['#3B82F6', '#2563EB']}
                className="w-full py-4 rounded-xl"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text className="text-white text-center text-base font-medium">
                  Create Account
                </Text>
              </LinearGradient>
            </TouchableOpacity>
      

            <TouchableOpacity onPress={() => router.push('/Home')} className="w-full border border-gray-200 py-4 rounded-xl bg-white shadow-sm active:bg-gray-50">
              <Text className="text-gray-700 text-center text-base">
                Sign In
              </Text>
            </TouchableOpacity>

        </View>
      </Animated.View>
    </SafeAreaView>
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
