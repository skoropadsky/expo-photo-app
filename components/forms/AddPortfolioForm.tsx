import { colors } from "@/styles/colors"
import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"

export default function AddPortfolioForm() {
    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label="Portfolio name"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <TextInput
                style={styles.textInput}
                label="Portfolio name"
                value={text}
                onChangeText={(text) => setText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        padding: 16,
    },
    textInput: {
        marginBottom: 8,
    },
})
