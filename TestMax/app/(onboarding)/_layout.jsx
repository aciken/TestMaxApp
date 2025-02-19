import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
        screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="onboarding_1" />  
            <Stack.Screen name="onboarding_2" />
            <Stack.Screen name="onboarding_3" />
            <Stack.Screen name="onboarding_4" />
            <Stack.Screen name="onboarding_5" />
            <Stack.Screen name="onboarding_6" />
            <Stack.Screen name="onboarding_7" />
            <Stack.Screen name="onboarding_8" />
            <Stack.Screen name="onboarding_9" />
            <Stack.Screen name="onboarding_10" />
            <Stack.Screen name="onboarding_11" />
            <Stack.Screen name="onboarding_12" />
        </Stack>
    )
}
