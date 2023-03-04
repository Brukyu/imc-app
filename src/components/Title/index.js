import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora IMC</Text>
            <Text style={styles.textDescription}>O Índice de Massa Corporal (IMC) é uma medida que avalia a relação entre peso e altura de uma pessoa.</Text>
        </View>
    )
}
