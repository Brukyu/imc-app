import React, {useState} from "react";
import { Text, TextInput, View, Button } from "react-native";
import ResultIMC from "./ResultIMC/";

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
        <View>
          <View>

            <Text>Altura</Text>
            <TextInput
              placeholder="Digite sua altura"
              keyboardType="numeric"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />

            <Text>Peso</Text>
            <TextInput
              placeholder="Digite seu peso"
              keyboardType="numeric"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />

            <Button title={textButton} onPress={validationIMC} />
          </View> 

          <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
        </View>
    )
}
