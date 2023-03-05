import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./style";
import { imcCalculator, getMessageIMC, getIMCClassification } from "./utils";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState(null);
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Resultado");
  const [selectedButton, setSelectedButton] = useState(null);

  function handleValidationIMC() {
    if (weight != null && height != null && selectedButton != null) {
      const imcValue = imcCalculator(weight, height);
      const message = getMessageIMC(imcValue, selectedButton);
      setIMC(imcValue);
      setMessageIMC(message);
      setHeight(null);
      setWeight(null);
      setTextButton("Calcular novamente");
      handleShowResultDialog(imcValue, message);
    } else {
      setIMC(null);
      setTextButton("Resultado");
      setMessageIMC("Selecione sua idade, digite sua altura e seu peso.");
    }
  }

  function handleShowResultDialog(imcValue, message) {
    Alert.alert(
      "Resultado",
      `Seu IMC é ${imcValue.toFixed(2)} - ${message}`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.FormContext}>
      <View style={styles.ageButtonContainer}>
        <TouchableOpacity
          style={[
            styles.ageButton,
            selectedButton === "adulto" && { backgroundColor: "#2996f0" },
          ]}
          onPress={() => setSelectedButton("adulto")}
        >
          <Text style={styles.ageButtonText}>Adulto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageButton,
            selectedButton === "idoso" && { backgroundColor: "#2996f0" },
          ]}
          onPress={() => setSelectedButton("idoso")}
        >
          <Text style={styles.ageButtonText}>Idoso</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            { marginBottom: 30, paddingLeft: 30, fontSize: 14, fontWeight: "300" },
          ]}
          placeholder="Digite Sua Altura"
          placeholderTextColor={"#000000"}
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <TextInput
          style={[styles.input, { paddingLeft: 30, fontSize: 14, fontWeight: "300" }]}
          placeholder="Digite seu peso"
          placeholderTextColor={"#000000"}
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />

        <TouchableOpacity style={styles.ButtonCalculator} onPress={() => handleValidationIMC()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
    </View>
  );
}
