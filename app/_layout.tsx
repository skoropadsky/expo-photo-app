import { colors } from "@/styles/colors"
import { Stack } from "expo-router"
import { setStatusBarStyle } from "expo-status-bar"
import { useEffect } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PaperProvider } from "react-native-paper"
import { theme } from "@/styles/theme"
import { Provider } from "react-redux"
import store from "@/store"

export default function RootLayout() {
    useEffect(() => {
        setStatusBarStyle("light")
    }, [])

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <PaperProvider theme={theme}>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                </PaperProvider>
            </SafeAreaView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
})
