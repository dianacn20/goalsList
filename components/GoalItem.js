import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

// Componenta GoalItem pentru reprezentarea unui element din lista de obiective
export default function GoalItem({ id, onDelete, text }) {
    return (
        <View style={styles.goalItem}>
            {/* Componenta Pressable permite utilizatorului să apese pe element */}
            <Pressable
                // Definirea unui efect de ripple (valuri) pentru feedback vizual pe platforma Android
                android_ripple={{ color: "#640093" }}
                // Definirea acțiunii de ștergere a obiectivului la apăsarea elementului
                onPress={() => onDelete(id)}
                // Definirea stilurilor pentru starea apăsată a elementului
                style={({ pressed }) =>
                    pressed ? styles.pressedItem : null
                }
            >
                {/* Textul afișat pentru obiectiv */}
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

// Definirea stilurilor pentru componenta GoalItem
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: "#64009e",
    },
    goalText: {
        padding: 10,
        color: "white",
    },
});
