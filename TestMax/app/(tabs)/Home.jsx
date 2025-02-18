import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView 
          className="flex-1 px-5" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center py-6">
            <View>
              <Text className="text-slate-800 text-2xl font-bold">
                Sunday, October 16
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => router.push('/modal/settings_modal')}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl items-center justify-center shadow-sm shadow-blue-100 border border-blue-50"
            >
              <Ionicons name="settings-outline" size={20} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          {/* Testosterone Overview */}
          <View className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-blue-50">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-slate-800 text-lg font-semibold">Testosterone Level</Text>
              <View className="bg-green-50 px-3 py-1 rounded-full">
                <Text className="text-green-600 font-medium text-xs">Optimal Range</Text>
              </View>
            </View>
            {/* Main T-Level Display */}
            <View className="flex-row justify-between items-center bg-blue-50 rounded-2xl p-4 mb-6">
              <View>
                <Text className="text-slate-600 text-sm mb-1">Current Level</Text>
                <View className="flex-row items-baseline">
                  <Text className="text-slate-900 text-3xl font-bold">724</Text>
                  <Text className="text-slate-600 text-sm ml-1">ng/dL</Text>
                </View>
              </View>
              <View className="w-12 h-12 bg-blue-100 rounded-xl items-center justify-center">
                <Ionicons name="pulse" size={24} color="#3b82f6" />
              </View>
            </View>
            <View className="flex-row space-x-3">
              <View className="flex-1 bg-slate-50 p-3 rounded-2xl">
                <Text className="text-slate-600 text-sm">Free T</Text>
                <View className="flex-row items-baseline mt-1">
                  <Text className="text-slate-900 text-xl font-semibold">21.2</Text>
                  <Text className="text-slate-500 text-xs ml-1">pg/mL</Text>
                </View>
              </View>
              <View className="flex-1 bg-slate-50 p-3 rounded-2xl">
                <Text className="text-slate-600 text-sm">SHBG</Text>
                <View className="flex-row items-baseline mt-1">
                  <Text className="text-slate-900 text-xl font-semibold">32</Text>
                  <Text className="text-slate-500 text-xs ml-1">nmol/L</Text>
                </View>
              </View>
              <View className="flex-1 bg-slate-50 p-3 rounded-2xl">
                <Text className="text-slate-600 text-sm">E2</Text>
                <View className="flex-row items-baseline mt-1">
                  <Text className="text-slate-900 text-xl font-semibold">28</Text>
                  <Text className="text-slate-500 text-xs ml-1">pg/mL</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Progress Cards */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="mb-8"
          >
            <View className="flex-row space-x-4">
              <View className="bg-white rounded-2xl p-4 w-32 shadow-sm border border-blue-50">
                <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mb-3">
                  <Ionicons name="barbell-outline" size={20} color="#3b82f6" />
                </View>
                <Text className="text-slate-400 text-sm">Training</Text>
                <Text className="text-slate-900 text-lg font-semibold mt-1">High</Text>
              </View>
              <View className="bg-white rounded-2xl p-4 w-32 shadow-sm border border-blue-50">
                <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mb-3">
                  <Ionicons name="nutrition-outline" size={20} color="#3b82f6" />
                </View>
                <Text className="text-slate-400 text-sm">Protein</Text>
                <Text className="text-slate-900 text-lg font-semibold mt-1">180g</Text>
              </View>
              <View className="bg-white rounded-2xl p-4 w-32 shadow-sm border border-blue-50">
                <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mb-3">
                  <Ionicons name="moon-outline" size={20} color="#3b82f6" />
                </View>
                <Text className="text-slate-400 text-sm">Sleep</Text>
                <Text className="text-slate-900 text-lg font-semibold mt-1">85%</Text>
              </View>
            </View>
          </ScrollView>

          {/* Daily Tasks */}
          <Text className="text-slate-900 text-base font-semibold mb-4">Daily Tasks</Text>
          <View className="space-y-3 mb-8">
            <TouchableOpacity className="bg-white p-4 rounded-2xl flex-row items-center shadow-sm border border-blue-50">
              <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mr-4">
                <Ionicons name="book-outline" size={20} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-slate-900 font-medium">Understanding Testosterone Blood Work</Text>
                <Text className="text-slate-500 text-sm">5 min read</Text>
              </View>
              <View className="w-6 h-6 bg-blue-50 rounded-full items-center justify-center">
                <Ionicons name="checkmark" size={14} color="#3b82f6" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-4 rounded-2xl flex-row items-center shadow-sm border border-blue-50">
              <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mr-4">
                <Ionicons name="fitness-outline" size={20} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-slate-900 font-medium">Compound Lifts Guide</Text>
                <Text className="text-slate-500 text-sm">8 min read</Text>
              </View>
              <View className="w-6 h-6 bg-blue-50 rounded-full items-center justify-center">
                <Ionicons name="chevron-forward" size={14} color="#3b82f6" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Weekly Progress */}
          <View className="bg-white rounded-2xl p-5 shadow-sm border border-blue-50">
            <Text className="text-slate-900 text-base font-semibold mb-3">Weekly Progress</Text>
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-slate-400 text-sm">Total T Change</Text>
                <Text className="text-green-500 text-2xl font-bold mt-1">+8%</Text>
              </View>
              <View className="w-10 h-10 bg-green-50 rounded-xl items-center justify-center">
                <Ionicons name="trending-up" size={20} color="#10b981" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const MetricCard = ({ icon, title, value, trend, color }) => (
  <View className="bg-slate-900 p-4 rounded-2xl border border-slate-800/50">
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-xl items-center justify-center" style={{ backgroundColor: color + '20' }}>
          <Ionicons name={icon} size={20} color={color} />
        </View>
        <View className="ml-3">
          <Text className="text-slate-300 text-sm">{title}</Text>
          <Text className="text-white font-medium text-base mt-0.5">{value}</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <Ionicons 
          name={trend === 'up' ? 'trending-up' : trend === 'down' ? 'trending-down' : 'remove'} 
          size={16} 
          color={
            trend === 'up' ? '#10b981' : 
            trend === 'down' ? '#ef4444' : 
            '#94a3b8'
          } 
        />
      </View>
    </View>
  </View>
);
