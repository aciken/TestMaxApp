import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SettingsModal() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View className="flex-1 bg-gray-950">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-800/50">
          <Text className="text-white text-xl font-semibold">Settings</Text>
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full bg-gray-900/80 border border-gray-800/50"
          >
            <Ionicons name="close" size={22} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6">
          {/* Profile Section */}
          <View className="py-6">
            <View className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-5">
              <View className="flex-row items-center space-x-4">
                <View className="w-16 h-16 bg-blue-500/20 rounded-2xl items-center justify-center border border-blue-400/30">
                  <Text className="text-blue-400 text-xl font-semibold">JD</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-lg font-medium">John Doe</Text>
                  <Text className="text-gray-400 text-sm">john.doe@example.com</Text>
                </View>
                <TouchableOpacity className="w-10 h-10 bg-blue-500/20 rounded-xl items-center justify-center">
                  <Ionicons name="create-outline" size={22} color="#60A5FA" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Settings Groups */}
          <View className="space-y-6">
            {/* App Settings */}
            <View className="space-y-3">
              <Text className="text-gray-400 text-sm font-medium px-1">APP SETTINGS</Text>
              <View className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden divide-y divide-gray-800/50">
                <SettingItem
                  icon="notifications"
                  title="Notifications"
                  subtitle="Push notifications"
                  isSwitch
                  value={notifications}
                  onValueChange={setNotifications}
                />
                <SettingItem
                  icon="moon"
                  title="Dark Mode"
                  subtitle="System default"
                  isSwitch
                  value={darkMode}
                  onValueChange={setDarkMode}
                />
              </View>
            </View>

            {/* Support */}
            <View className="space-y-3">
              <Text className="text-gray-400 text-sm font-medium px-1">SUPPORT</Text>
              <View className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden divide-y divide-gray-800/50">
                <SettingItem
                  icon="help-circle"
                  title="Help Center"
                  onPress={() => {}}
                />
                <SettingItem
                  icon="shield-checkmark"
                  title="Privacy Policy"
                  onPress={() => {}}
                />
                <SettingItem
                  icon="document-text"
                  title="Terms of Service"
                  onPress={() => {}}
                />
              </View>
            </View>

            {/* Account */}
            <View className="space-y-3">
              <Text className="text-gray-400 text-sm font-medium px-1">ACCOUNT</Text>
              <View className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden">
                <SettingItem
                  icon="log-out"
                  title="Sign Out"
                  textColor="text-red-400"
                  iconColor="#F87171"
                  onPress={() => {router.back();router.push('/')}}
                />
              </View>
            </View>
          </View>

          {/* App Version */}
          <View className="py-8 items-center">
            <Text className="text-gray-500 text-sm">Version 1.0.0</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const SettingItem = ({ 
  icon, 
  title, 
  subtitle, 
  isSwitch, 
  value, 
  onValueChange, 
  onPress,
  textColor = "text-white",
  iconColor = "#60A5FA"
}) => (
  <TouchableOpacity 
    className="flex-row items-center justify-between p-4"
    onPress={onPress}
    disabled={isSwitch}
  >
    <View className="flex-row items-center space-x-3 flex-1">
      <View className="w-10 h-10 rounded-xl items-center justify-center bg-gray-800/50">
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <View>
        <Text className={`font-medium ${textColor}`}>{title}</Text>
        {subtitle && (
          <Text className="text-gray-400 text-sm">{subtitle}</Text>
        )}
      </View>
    </View>
    {isSwitch ? (
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#1F2937', true: '#2563EB' }}
        thumbColor={value ? '#60A5FA' : '#9CA3AF'}
      />
    ) : (
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    )}
  </TouchableOpacity>
);
