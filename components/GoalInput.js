import React from "react";
import { Modal, View, TextInput, Button, StyleSheet, Image } from "react-native";

// Componenta GoalInput utilizată pentru introducerea unui nou obiectiv
export default function GoalInput({ onAddHandler, visible, onCloseModal }) {
    // Definirea stării pentru textul introdus în câmpul de introducere
    const [enteredGoal, setEnteredGoal] = React.useState("");

    // Funcție pentru actualizarea stării textului introdus în câmpul de introducere
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    // Funcție pentru adăugarea unui nou obiectiv și resetarea câmpului de introducere
    const onPresshandler = () => {
        onAddHandler(enteredGoal);
        setEnteredGoal("");
    };

    // Funcție pentru închiderea modului de introducere și resetarea câmpului de introducere
    const cancelHandler = () => {
        onCloseModal();
        setEnteredGoal("");
    };

    // Returnarea elementelor componente și a structurii modale pentru introducerea unui nou obiectiv
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                {/* Imaginea afișată în cadrul modului de introducere */}
                <Image
                    source={require("../assets/images/goal.png")}
                />
                {/* Câmpul de introducere pentru noul obiectiv */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Goal!"
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />
                {/* Containerul pentru butoanele de adăugare și anulare */}
                <View style={styles.buttonContainer}>
                    {/* Butoanele de adăugare și anulare */}
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={onPresshandler}
                            color="#5e0acc"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={cancelHandler}
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

// Stilurile utilizate în cadrul componentei GoalInput
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#cccccc",
        backgroundColor: "#311b6b",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
