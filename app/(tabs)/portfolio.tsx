import { colors } from "@/styles/colors"
import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Button, IconButton } from "react-native-paper"
import AddModal from "@/components/modals/AddModal"
import AddPortfolioForm from "@/components/forms/AddPortfolioForm"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { getPortfolios } from "@/store/portfolios/actions"

export default function AboutScreen() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { userPortfolios } = useSelector((state: RootState) => state.portfolios)
    const dispatch = useDispatch<AppDispatch>()

    const loadPortfolios = async () => {
        await dispatch(getPortfolios({ userId: "1" }))
    }

    useEffect(() => {
        loadPortfolios()
    }, [])

    return (
        <View style={styles.container}>
            {userPortfolios.map((userPortfolio) => (
                <View key={userPortfolio.id} style={styles.portfolioCard}>
                    <Text style={styles.text}>{userPortfolio.title}</Text>
                    <Text style={styles.text}>$1000000 (will calculated)</Text>
                    <View>
                        <Text style={styles.text}>+2%</Text>
                    </View>
                    <Button mode="contained" onPress={() => alert("Pressed")}>
                        Press me
                    </Button>
                </View>
            ))}
            <IconButton
                style={styles.addButton}
                mode="contained"
                icon="plus"
                size={32}
                onPress={() => setIsModalOpen(true)}
            />
            <AddModal title="Choose asset" isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddPortfolioForm />
            </AddModal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: colors.bg,
        padding: 16,
    },
    portfolioCard: {
        backgroundColor: colors.bgSecondary,
        padding: 16,
        borderRadius: 16,
    },
    text: {
        color: "#fff",
    },
    addButton: {
        position: "absolute",
        right: 16,
        bottom: 16,
    },
})
