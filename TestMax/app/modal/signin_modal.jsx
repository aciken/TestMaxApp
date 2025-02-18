import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <StatusBar style="dark" />
      
      <SafeAreaView className="flex-1">

        <View className="flex-1 px-8">
          {/* Logo */}
          <View className="items-center mt-6 mb-8">
            <View className="w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center border border-blue-100 shadow-sm shadow-blue-100">
              <Text className="text-blue-500 text-3xl font-bold">T+</Text>
            </View>
          </View>

          {/* Title Section */}
          <View className="mb-8">
            <Text className="text-slate-800 text-3xl font-bold mb-2">
              Welcome back
            </Text>
            <Text className="text-slate-600 text-lg">
              Let's get you in to TestMax
            </Text>
          </View>

          {/* Form */}
          <View className="space-y-3">
            <View className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm shadow-blue-50 border border-blue-50">
              <TextInput
                placeholder="Your Email"
                placeholderTextColor="#94a3b8"
                className="px-4 py-3 text-slate-900 text-base"
              />
            </View>

            <View className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm shadow-blue-50 border border-blue-50">
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#94a3b8"
                className="px-4 py-3 text-slate-900 text-base"
                secureTextEntry
              />
            </View>

            <TouchableOpacity className="items-center py-1.5">
              <Text className="text-slate-600 text-sm">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View className="mt-6 space-y-3">
            <TouchableOpacity 
              className="w-full bg-blue-500 py-3.5 rounded-full items-center shadow-sm shadow-blue-200"
              onPress={() => {router.back();router.push('/Home')}}
            >
              <Text className="text-white text-base font-medium">
                Sign in
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center py-3">
              <View className="flex-1 h-px bg-slate-200" />
              <Text className="text-slate-600 px-4 text-sm">or</Text>
              <View className="flex-1 h-px bg-slate-200" />
            </View>

            <TouchableOpacity 
              className="w-full bg-white/90 backdrop-blur-sm border border-blue-50 py-3.5 rounded-full flex-row items-center justify-center space-x-2 shadow-sm shadow-blue-50"
              onPress={() => {/* Handle Apple sign in */}}
            >
              <Ionicons name="logo-apple" size={20} color="#1e293b" />
              <Text className="text-slate-800 text-base">
                Sign In With Apple
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="w-full bg-white/90 backdrop-blur-sm border border-blue-50 py-3.5 rounded-full flex-row items-center justify-center space-x-2 shadow-sm shadow-blue-50"
              onPress={() => {/* Handle Google sign in */}}
            >
              <Ionicons name="logo-google" size={18} color="#1e293b" />
              <Text className="text-slate-800 text-base">
                Sign In With Google
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Text */}
          <View className="mt-auto mb-6 items-center">
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-slate-600 text-base">
                Don't have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
