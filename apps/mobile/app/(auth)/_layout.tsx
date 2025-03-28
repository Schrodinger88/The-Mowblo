import { Stack } from "expo-router";

export default function AuthenticationLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="welcome" />
            <Stack.Screen name="sign-up" />
            <Stack.Screen name="sign-in" />
        </Stack>
    )
}