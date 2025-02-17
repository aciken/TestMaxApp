import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="flex-row justify-between items-center py-6">
            <View>
              <Text className="text-slate-300 text-sm font-medium">Welcome back</Text>
              <Text className="text-white text-2xl font-bold mt-1">John Doe</Text>
            </View>
            <TouchableOpacity className="p-2 bg-white/5 rounded-xl">
              <Ionicons name="notifications-outline" size={24} color="#94a3b8" />
            </TouchableOpacity>
          </View>

          {/* Health Overview */}
          <LinearGradient
            colors={['#1e293b', '#0f172a']}
            className="rounded-3xl p-6 mb-6 border border-slate-800/50"
          >
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-slate-300 text-sm font-medium">Current Level</Text>
                <Text className="text-white text-4xl font-bold mt-2">650</Text>
                <Text className="text-slate-400 text-sm mt-1">ng/dL</Text>
              </View>
              <View className="items-end">
                <View className="bg-emerald-500/20 px-3 py-1 rounded-full flex-row items-center">
                  <Ionicons name="trending-up" size={14} color="#10b981" />
                  <Text className="text-emerald-400 text-sm ml-1">8%</Text>
                </View>
                <Text className="text-slate-400 text-xs mt-2">vs last month</Text>
              </View>
            </View>
            
            <View className="flex-row gap-3">
              <View className="flex-1 bg-slate-800/30 p-4 rounded-2xl border border-slate-800/50">
                <Text className="text-slate-400 text-xs">Last Test</Text>
                <Text className="text-white text-sm font-medium mt-1">2 weeks ago</Text>
              </View>
              <View className="flex-1 bg-slate-800/30 p-4 rounded-2xl border border-slate-800/50">
                <Text className="text-slate-400 text-xs">Next Due</Text>
                <Text className="text-white text-sm font-medium mt-1">5 days</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Quick Actions */}
          <Text className="text-slate-300 text-sm font-medium mb-4">Quick Actions</Text>
          <View className="flex-row gap-4 mb-8">
            <TouchableOpacity className="flex-1 bg-indigo-500/10 p-5 rounded-2xl border border-indigo-500/20">
              <Ionicons name="add" size={24} color="#818cf8" />
              <Text className="text-white font-semibold mt-3">New Test</Text>
              <Text className="text-slate-400 text-xs mt-1">Record results</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-slate-800/30 p-5 rounded-2xl border border-slate-800/50">
              <Ionicons name="stats-chart" size={24} color="#94a3b8" />
              <Text className="text-white font-semibold mt-3">Analytics</Text>
              <Text className="text-slate-400 text-xs mt-1">View history</Text>
            </TouchableOpacity>
          </View>

          {/* Health Metrics */}
          <Text className="text-slate-300 text-sm font-medium mb-4">Health Metrics</Text>
          <View className="gap-3 mb-8">
            <MetricCard
              icon="moon"
              title="Sleep Quality"
              value="7.5h"
              trend="up"
              color="#8b5cf6"
            />
            <MetricCard
              icon="barbell"
              title="Exercise"
              value="4 sessions"
              trend="stable"
              color="#3b82f6"
            />
            <MetricCard
              icon="heart"
              title="Stress Level"
              value="Optimal"
              trend="down"
              color="#10b981"
            />
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
