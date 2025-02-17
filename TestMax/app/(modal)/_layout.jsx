import { Stack } from 'expo-router';

export default function ModalLayout() {
    return (
        <Stack>
            <Stack.Screen  
            screenOptions={{
            presentation: 'modal',
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        name="settings_modal" />
        </Stack>
    )
}
