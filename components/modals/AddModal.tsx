import { Modal, View, Text, Pressable, StyleSheet } from "react-native"
import { PropsWithChildren } from "react"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "@/styles/colors"

type Props = PropsWithChildren<{
    title: string
    isVisible: boolean
    onClose: () => void
}>

export default function EmojiPicker({ title, isVisible, children, onClose }: Props) {
    const insets = useSafeAreaInsets()

    return (
        <Modal
            style={styles.modalContainer}
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={[styles.modalContent, { paddingBottom: insets.bottom, paddingTop: insets.top }]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={24} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
    },
    modalContent: {
        height: "100%",
        width: "100%",
        backgroundColor: colors.bgSecondary,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    title: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    closeButton: {
        display: "flex",
        padding: 12,
    },
})
