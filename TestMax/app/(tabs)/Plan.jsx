import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Plan() {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="flex-row justify-between items-center py-6">
            <View>
              <Text className="text-slate-300 text-sm font-medium">Optimization Plan</Text>
              <Text className="text-white text-2xl font-bold mt-1">Current Program</Text>
            </View>
            <TouchableOpacity className="p-2 bg-white/5 rounded-xl">
              <Ionicons name="calendar" size={24} color="#94a3b8" />
            </TouchableOpacity>
          </View>

          {/* Progress */}
          <LinearGradient
            colors={['#1e293b', '#0f172a']}
            className="rounded-3xl p-6 mb-6 border border-slate-800/50"
          >
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-slate-300 text-sm font-medium">Program Progress</Text>
              <Text className="text-sky-400 text-sm">65%</Text>
            </View>
            <View className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
              <View className="w-[65%] h-full bg-gradient-to-r from-sky-500 to-indigo-500" />
            </View>
            <Text className="text-slate-400 text-xs mt-3">Week 3 of 4</Text>
          </LinearGradient>

          {/* Daily Tasks */}
          <Text className="text-slate-300 text-sm font-medium mb-4">Today's Tasks</Text>
          <View className="gap-3 mb-8">
            <TaskItem
              title="Morning Workout"
              time="7:00 AM"
              completed={true}
              type="exercise"
            />
            <TaskItem
              title="Nutrition Check"
              time="1:00 PM"
              completed={false}
              type="nutrition"
            />
            <TaskItem
              title="Sleep Routine"
              time="10:00 PM"
              completed={false}
              type="sleep"
            />
          </View>

          {/* Recommendations */}
          <Text className="text-slate-300 text-sm font-medium mb-4">Recommendations</Text>
          <View className="gap-3 mb-8">
            <RecommendationCard
              icon="nutrition"
              title="Increase Zinc Intake"
              category="Nutrition"
              color="#f59e0b"
            />
            <RecommendationCard
              icon="walk"
              title="Evening Walk"
              category="Exercise"
              color="#10b981"
            />
            <RecommendationCard
              icon="moon"
              title="Sleep Supplements"
              category="Recovery"
              color="#8b5cf6"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const TaskItem = ({ title, time, completed, type }) => {
  const typeColors = {
    exercise: '#3b82f6',
    nutrition: '#10b981',
    sleep: '#8b5cf6'
  };

  return (
    <View className="bg-slate-900 p-4 rounded-2xl border border-slate-800/50">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <View 
            className="w-10 h-10 rounded-xl items-center justify-center"
            style={{ backgroundColor: typeColors[type] + '20' }}
          >
            <Ionicons 
              name={completed ? 'checkmark-circle' : 'ellipse-outline'} 
              size={20} 
              color={completed ? typeColors[type] : '#475569'} 
            />
          </View>
          <View className="ml-3">
            <Text className="text-white font-medium">{title}</Text>
            <Text className="text-slate-400 text-xs mt-1">{time}</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#475569" />
      </View>
    </View>
  );
};

const RecommendationCard = ({ icon, title, category, color }) => (
  <View className="bg-slate-900 p-4 rounded-2xl border border-slate-800/50">
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <View 
          className="w-10 h-10 rounded-xl items-center justify-center"
          style={{ backgroundColor: color + '20' }}
        >
          <Ionicons name={icon} size={20} color={color} />
        </View>
        <View className="ml-3">
          <Text className="text-white font-medium">{title}</Text>
          <Text className="text-slate-400 text-xs mt-1">{category}</Text>
        </View>
      </View>
      <TouchableOpacity className="bg-slate-800/50 p-2 rounded-lg">
        <Text className="text-slate-300 text-xs">View</Text>
      </TouchableOpacity>
    </View>
  </View>
);
