import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
        screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="index" />  
            <Stack.Screen name="(tabs)" 
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen 
              name="modal/settings_modal"
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom',
              }}
            />
        </Stack>
    )
}
