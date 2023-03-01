import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./style";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight,setWeight]= useState(null)
const [messageIMC, setMessageIMC]= useState("preencha o peso e altura")
const [imc, setIMC]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator (){
    return setIMC ((weight/(height*height)).toFixed(2))
}

function validationIMC(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC("Seu imc é igual:")
        setTextButton("Calcular novamente")
        return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("preencha o texto e altura")
}

    return(
        <View style={styles.FormContext}>
          <View style={styles.form}>

            <Text style={styles.formLable}>Altura</Text>
            <TextInput style={styles.input}
              placeholder="Digite sua altura"
              keyboardType="numeric"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />

            <Text style={styles.formLable}>Peso</Text>
            <TextInput style={styles.input}
              placeholder="Digite seu peso"
              keyboardType="numeric"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />

            <TouchableOpacity style ={styles.ButtonCalculator}
              onPress={()=> {
                validationIMC()
              }}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View> 

          <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
        </View>
    )
}
