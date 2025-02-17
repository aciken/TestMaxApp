import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Plan() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6 pb-4">
          <Text className="text-2xl font-bold text-gray-900">My Plan</Text>
          <Text className="text-base text-gray-600 mt-1">Your optimization journey</Text>
        </View>

        {/* Progress Overview */}
        <View className="px-6 mb-6">
          <LinearGradient
            colors={['#818CF8', '#6366F1']}
            className="p-6 rounded-2xl"
          >
            <Text className="text-white text-lg font-medium mb-2">Current Goal</Text>
            <Text className="text-white/90 text-base mb-4">Optimize natural production</Text>
            <View className="w-full h-2 bg-white/20 rounded-full">
              <View className="w-[65%] h-full bg-white rounded-full" />
            </View>
            <Text className="text-white/80 text-sm mt-2">65% completed</Text>
          </LinearGradient>
        </View>

        {/* Daily Tasks */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-medium text-gray-900 mb-4">Today's Tasks</Text>
          <View className="space-y-4">
            <TaskItem 
              title="Morning Workout"
              description="Strength training - Focus on compound exercises"
              completed={true}
            />
            <TaskItem 
              title="Nutrition"
              description="Hit your protein target of 180g"
              completed={false}
            />
            <TaskItem 
              title="Sleep Schedule"
              description="Aim for 8 hours of quality sleep"
              completed={false}
            />
          </View>
        </View>

        {/* Recommendations */}
        <View className="px-6">
          <Text className="text-lg font-medium text-gray-900 mb-4">Recommendations</Text>
          <View className="space-y-4">
            <RecommendationCard 
              title="Optimize Sleep"
              description="Consider taking ZMA supplement before bed"
              type="supplement"
            />
            <RecommendationCard 
              title="Stress Management"
              description="Add 10-minute meditation to morning routine"
              type="lifestyle"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const TaskItem = ({ title, description, completed }) => (
  <View className="flex-row items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
    <View className={`w-5 h-5 rounded-full border-2 mr-3 mt-1 ${completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`} />
    <View className="flex-1">
      <Text className="text-gray-900 font-medium">{title}</Text>
      <Text className="text-gray-600 text-sm">{description}</Text>
    </View>
  </View>
);

const RecommendationCard = ({ title, description, type }) => (
  <View className="p-4 bg-gray-50 rounded-xl border border-gray-200">
    <View className="flex-row justify-between items-start mb-2">
      <Text className="text-gray-900 font-medium">{title}</Text>
      <View className="px-2 py-1 bg-blue-100 rounded">
        <Text className="text-blue-800 text-xs">{type}</Text>
      </View>
    </View>
    <Text className="text-gray-600 text-sm">{description}</Text>
  </View>
);
