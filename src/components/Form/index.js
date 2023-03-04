import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState(null);
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Resultado");
  const [selectedButton, setSelectedButton] = useState(null);

  function imcCalculator() {
    return setIMC((weight / (height * height)).toFixed(2));
  }

  function validationIMC() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu imc é igual:");
      setTextButton("Calcular novamente");
      return;
    }
    setIMC(null);
    setTextButton("Resultado");
    setMessageIMC("Preencha o texto e altura");
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
          <Text style={[styles.ageButtonText, selectedButton === "adulto" && { color: "#FFFFFF" }]}>Adulto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageButton,
            selectedButton === "idoso" && { backgroundColor: "#2996f0" },
          ]}
          onPress={() => setSelectedButton("idoso")}
        >
          <Text style={[styles.ageButtonText, selectedButton === "idoso" && { color: "#FFFFFF" }]}>Idoso</Text>
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
          placeholder="Digite Seu Peso"
          placeholderTextColor={"#000000"}
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />

        <TouchableOpacity style={styles.ButtonCalculator} onPress={() => validationIMC()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
    </View>
  );
}
