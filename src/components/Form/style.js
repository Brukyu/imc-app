import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  FormContext: {
    backgroundColor:"#ffffff",
    width: "100%",
    height: "100%",
    bottom: 0,
    alignItems:"center",
    borderTopLeftRadius:62,
    borderTopRightRadius:62,
    marginTop:30,
  },
  form:{
    width:"100%",
    height:"auto",
    marginTop: 20,
    padding: 10, 
  },
  formLable:{
    color:"#000000",
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  input:{
    width:"80%",
    borderRadius:10,
    backgroundColor:"#ffffff",
    height:60,
    paddingLeft:30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    alignSelf: "center", // adicionado para centralizar  
  },
  ButtonCalculator:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent:"center",
    width: "80%",
    backgroundColor:"#4eaf50",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:32,
    marginTop:50,
  },
  textButtonCalculator:{
    fontSize: 16,
    fontWeight:"500",
    color: "#ffffff"
  },
  ageButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    width: "76%",
  },
  ageButton: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    height: 60,
    marginHorizontal: 1, //aqui eu troquei a propriedade margin por marginHorizontal
    paddingLeft: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ageButtonText: {
    fontSize: 15,
    fontWeight:"300",
    color: "#000000", // cor padrão do texto
  },
});

export default styles;
