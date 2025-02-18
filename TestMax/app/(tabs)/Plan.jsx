import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Plan() {
  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Header */}
          <View className="flex-row justify-between items-center py-6">
            <View>
              <Text className="text-slate-800 text-2xl font-bold">
                Sunday, October 16
              </Text>
            </View>
          </View>

          {/* Day Streak Section */}
          <View className="flex-row mb-6 overflow-hidden">
            <View className="bg-indigo-600 rounded-3xl px-5 py-4 flex-row items-center justify-between flex-1">
              <View>
                <Text className="text-white/80 text-sm">Day Streak</Text>
                <Text className="text-white text-2xl font-bold mt-1">3</Text>
              </View>
            </View>
          </View>

          {/* Days Progress */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="mb-8"
          >
            <View className="flex-row space-x-3">
              <View className="bg-white rounded-2xl px-4 py-3 items-center border border-blue-50 shadow-sm">
                <View className="w-10 h-10 bg-orange-50 rounded-xl items-center justify-center mb-1">
                  <Ionicons name="flame" size={20} color="#f97316" />
                </View>
                <Text className="text-slate-600 text-sm">Day 3</Text>
              </View>
              {/* Future days are less emphasized */}
              <View className="bg-white/60 rounded-2xl px-4 py-3 items-center border border-blue-50">
                <View className="w-10 h-10 bg-slate-50 rounded-xl items-center justify-center mb-1">
                  <Text className="text-slate-400">4</Text>
                </View>
                <Text className="text-slate-400 text-sm">Day 4</Text>
              </View>
              {/* Add more future days... */}
            </View>
          </ScrollView>

          {/* Daily Tasks */}
          <Text className="text-slate-400 text-sm mb-3">Daily Tasks</Text>
          <View className="bg-white rounded-3xl p-4 border border-blue-50 shadow-sm mb-4">
            <Text className="text-slate-800 font-medium mb-2">Great work!</Text>
            <Text className="text-slate-600 text-sm">You completed today's tasks</Text>
          </View>

          <View className="gap-3 mb-8">
            <TaskItem
              title="Morning Workout"
              time="7:00 AM"
              completed={true}
              type="exercise"
            />
            <TaskItem
              title="Supplement Stack"
              time="1:00 PM"
              completed={false}
              type="nutrition"
            />
            <TaskItem
              title="Sleep Optimization"
              time="10:00 PM"
              completed={false}
              type="sleep"
            />
          </View>

          {/* Recommendations */}
          <Text className="text-slate-400 text-sm mb-4">Educational Content</Text>
          <View className="gap-3 mb-8">
            <RecommendationCard
              icon="nutrition"
              title="Testosterone & Micronutrients"
              category="Nutrition"
              time="5 min read"
            />
            <RecommendationCard
              icon="barbell"
              title="Compound Lifts Impact"
              category="Exercise"
              time="4 min read"
            />
            <RecommendationCard
              icon="moon"
              title="Sleep & Hormone Production"
              category="Recovery"
              time="3 min read"
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
    <View className="bg-white p-4 rounded-2xl flex-row items-center shadow-sm border border-blue-50">
      <View className="flex-row justify-between items-center flex-1">
        <View className="flex-row items-center">
          <View 
            className="w-10 h-10 rounded-xl items-center justify-center mr-4"
            style={{ backgroundColor: typeColors[type] + '20' }}
          >
            <Ionicons 
              name={completed ? 'checkmark-circle' : 'ellipse-outline'} 
              size={20} 
              color={completed ? typeColors[type] : '#475569'} 
            />
          </View>
          <View>
            <Text className="text-slate-900 font-medium">{title}</Text>
            <Text className="text-slate-500 text-sm mt-1">{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const RecommendationCard = ({ icon, title, category, time }) => (
  <View className="bg-white p-4 rounded-2xl flex-row items-center shadow-sm border border-blue-50">
    <View className="flex-row justify-between items-center flex-1">
      <View className="flex-row items-center">
        <View 
          className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mr-4"
        >
          <Ionicons name={icon} size={20} color="#3b82f6" />
        </View>
        <View>
          <Text className="text-slate-900 font-medium">{title}</Text>
          <Text className="text-slate-500 text-sm mt-1">{time}</Text>
        </View>
      </View>
      <View className="w-6 h-6 bg-blue-50 rounded-full items-center justify-center">
        <Ionicons name="checkmark" size={14} color="#3b82f6" />
      </View>
    </View>
  </View>
);

