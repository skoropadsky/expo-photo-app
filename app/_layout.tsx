import { colors } from "@/styles/colors"
import { Stack } from "expo-router"
import { setStatusBarStyle } from "expo-status-bar"
import { useEffect } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PaperProvider } from "react-native-paper"
import { theme } from "@/styles/theme"

export default function RootLayout() {
    useEffect(() => {
        setStatusBarStyle("light")
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <PaperProvider theme={theme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </PaperProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
})
