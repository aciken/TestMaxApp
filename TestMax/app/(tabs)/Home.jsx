import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6 pb-4">
          <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
          <Text className="text-base text-gray-600 mt-1">Track your progress</Text>
        </View>

        {/* Main Stats Card */}
        <View className="px-6 mb-6">
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            className="p-6 rounded-2xl"
          >
            <Text className="text-white text-lg font-medium mb-4">Current Level</Text>
            <View className="flex-row justify-between items-end">
              <View>
                <Text className="text-white/80 text-sm mb-1">Testosterone</Text>
                <Text className="text-white text-3xl font-bold">650</Text>
                <Text className="text-white/80 text-sm">ng/dL</Text>
              </View>
              <View className="items-end">
                <Text className="text-green-300 text-sm">↑ 8%</Text>
                <Text className="text-white/70 text-xs">vs last month</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View className="px-6 mb-6">
          <Text className="text-lg font-medium text-gray-900 mb-4">Quick Actions</Text>
          <View className="flex-row space-x-4">
            <QuickActionButton title="Log Test" icon="📊" />
            <QuickActionButton title="View History" icon="📈" />
          </View>
        </View>

        {/* Health Markers */}
        <View className="px-6">
          <Text className="text-lg font-medium text-gray-900 mb-4">Health Markers</Text>
          <View className="space-y-4">
            <HealthMarker title="Sleep Quality" value="7.5" unit="hrs" trend="up" />
            <HealthMarker title="Exercise" value="4" unit="sessions" trend="up" />
            <HealthMarker title="Stress Level" value="Low" trend="stable" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const QuickActionButton = ({ title, icon }) => (
  <TouchableOpacity className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200">
    <Text className="text-2xl mb-2">{icon}</Text>
    <Text className="text-gray-900 font-medium">{title}</Text>
  </TouchableOpacity>
);

const HealthMarker = ({ title, value, unit, trend }) => (
  <View className="flex-row items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
    <View>
      <Text className="text-gray-900 font-medium">{title}</Text>
      <Text className="text-gray-600">
        {value} {unit}
      </Text>
    </View>
    <Text className="text-sm">
      {trend === 'up' && '↑'}
      {trend === 'down' && '↓'}
      {trend === 'stable' && '→'}
    </Text>
  </View>
);
