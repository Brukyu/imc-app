export function imcCalculator(weight, height) {
  return weight / (height * height);
}

export function getMessageIMC(imcValue, age) {
  const imcClassification = getIMCClassification(imcValue, age);

  switch (imcClassification) {
    case "abaixo": {
      return "Abaixo do peso";
    }
    case "normal": {
      return "Peso normal";
    }
    case "sobrepeso": {
      return "Sobrepeso";
    }
    case "obesidade1": {
      return "Obesidade grau 1";
    }
    case "obesidade2": {
      return "Obesidade grau 2";
    }
    case "obesidade3": {
      return "Obesidade grau 3";
    }
    default: {
      return "";
    }
  }
}

export function getIMCClassification(imcValue, age) {
  if (age === "adulto") {
    if (imcValue < 18.5) {
      return "abaixo";
    } else if (imcValue >= 18.5 && imcValue < 25) {
      return "normal";
    } else if (imcValue >= 25 && imcValue < 30) {
      return "sobrepeso";
    } else if (imcValue >= 30 && imcValue < 35) {
      return "obesidade1";
    } else if (imcValue >= 35 && imcValue < 40) {
      return "obesidade2";
    } else {
      return "obesidade3";
    }
  } else if (age === "idoso") {
    if (imcValue < 22) {
      return "abaixo";
    } else if (imcValue >= 22 && imcValue < 27) {
      return "normal";
    } else if (imcValue >= 27 && imcValue < 30) {
      return "sobrepeso";
    } else if (imcValue >= 30 && imcValue < 35) {
      return "obesidade1";
    } else if (imcValue >= 35 && imcValue < 40) {
      return "obesidade2";
    } else {
      return "obesidade3";
    }
  }
}

export function validationIMC(weight, height, age, showAlert) {
  if (weight != null && height != null && age != null) {
    const imcValue = imcCalculator(weight, height);
    const message = getMessageIMC(imcValue, age);
    showAlert(imcValue, message);
  } else {
    showAlert(null, "Selecione sua idade, digite sua altura e seu peso.");
  }
}

export function showResultDialog(imcValue, message) {
  Alert.alert(
    "Resultado",
    `Seu IMC é ${imcValue.toFixed(2)} - ${message}`,
    [{ text: "OK" }],
    { cancelable: false }
  );
}
