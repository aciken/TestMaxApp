import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  return (
    <View className="flex-1 bg-slate-950">
      <StatusBar style="light" />
      
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-6 flex-row justify-between items-center">
          <View />
          <TouchableOpacity 
            onPress={() => router.back()}
            className="py-2"
          >
            <Text className="text-slate-400 text-base">Skip</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 px-8">
          {/* Logo */}
          <View className="items-center mt-6 mb-8">
            <View className="w-16 h-16 bg-blue-500/20 rounded-2xl items-center justify-center border border-blue-500/30">
              <Text className="text-blue-400 text-3xl font-bold">T+</Text>
            </View>
          </View>

          {/* Title Section */}
          <View className="mb-8">
            <Text className="text-white text-3xl font-bold mb-2">
              Welcome back
            </Text>
            <Text className="text-slate-400 text-lg">
              Let's get you in to TestMax
            </Text>
          </View>

          {/* Form */}
          <View className="space-y-3">
            <View className="border border-slate-800 rounded-2xl bg-slate-900/50">
              <TextInput
                placeholder="Your Email"
                placeholderTextColor="#64748b"
                className="px-4 py-3 text-white text-base"
              />
            </View>

            <View className="border border-slate-800 rounded-2xl bg-slate-900/50">
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#64748b"
                secureTextEntry
                className="px-4 py-3 text-white text-base"
              />
            </View>

            <TouchableOpacity className="items-center py-1.5">
              <Text className="text-slate-400 text-sm">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View className="mt-6 space-y-3">
            <TouchableOpacity 
              className="w-full bg-blue-500 py-3.5 rounded-full items-center"
              onPress={() => router.push('/Home')}
            >
              <Text className="text-white text-base font-medium">
                Sign in
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center py-3">
              <View className="flex-1 h-px bg-slate-800" />
              <Text className="text-slate-400 px-4 text-sm">or</Text>
              <View className="flex-1 h-px bg-slate-800" />
            </View>

            <TouchableOpacity 
              className="w-full bg-slate-900 border border-slate-800 py-3.5 rounded-full flex-row items-center justify-center space-x-2"
              onPress={() => {/* Handle Apple sign in */}}
            >
              <Ionicons name="logo-apple" size={20} color="white" />
              <Text className="text-white text-base">
                Sign In With Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="w-full bg-slate-900 border border-slate-800 py-3.5 rounded-full flex-row items-center justify-center space-x-2"
              onPress={() => {/* Handle Google sign in */}}
            >
              <Ionicons name="logo-google" size={18} color="white" />
              <Text className="text-white text-base">
                Sign In With Google
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Text */}
          <View className="mt-auto mb-6 items-center">
            <TouchableOpacity onPress={() => {router.back();router.push('/(onboarding)/onboarding_1')}}>
              <Text className="text-slate-400 text-base">
                Don't have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
