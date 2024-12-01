import React, { useState } from "react";
import { Button, StatusBar, View, StyleSheet, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

// Definirea componentei principale a aplicației
export default function App() {
    // Definirea stării goals, care va conține lista de obiecte ce reprezintă obiectivele utilizatorului
    const [goals, setGoals] = useState([]);
    // Definirea stării modalIsVisible, care indică dacă modulul pentru introducerea unui nou obiectiv este vizibil sau nu
    const [modalIsVisible, setModalIsVisible] = useState(false);

    // Funcție pentru deschiderea modului de introducere a unui nou obiectiv
    const openModalHandler = () => {
        setModalIsVisible(true);
    };

    // Funcție pentru închiderea modului de introducere a unui nou obiectiv
    const closeModalHandler = () => {
        setModalIsVisible(false);
    };

    // Funcție pentru adăugarea unui nou obiectiv la lista de obiective
    const addGoalHandler = (enteredGoal) => {
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoal, id: Math.random().toString() },
        ]);
    };

    // Funcție pentru ștergerea unui obiectiv din lista de obiective
    const deleteGoalHandler = (goalId) => {
        setGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.id !== goalId)
        );
    };

    // Returnarea structurii și a elementelor componente ale aplicației
    return (
        <View style={styles.container}>
            <StatusBar style="light-content" />
            <Button
                title="Add new Goal"
                color="#64009e"
                onPress={openModalHandler}
            />
            <GoalInput
                onAddHandler={addGoalHandler}
                visible={modalIsVisible}
                onCloseModal={closeModalHandler}
            />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => (
                        <GoalItem
                            id={itemData.item.id}
                            onDelete={deleteGoalHandler}
                            text={itemData.item.text}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

// Stilurile folosite în cadrul aplicației
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#1e085a",
    },
    goalsContainer: {
        flex: 9,
    },
});
