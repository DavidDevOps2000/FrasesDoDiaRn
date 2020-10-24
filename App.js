import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

const Estilos = {
  principal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    height:150,
    width:150,
  },
  btnFrase:{
    backgroundColor:'#538630',
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20
  },
  txtBtn:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }

};



const btnmsg = () => {
  var numRan = Math.random();
  numRan = Math.floor(numRan * 5);//Aqui é um numero aletorio de 1 a 5

  //Frases
  var frases = Array();
  frases[0] = 'Frase 1';
  frases[1] = 'Frase 2';
  frases[2] = 'Frase 3';
  frases[3] = 'Frase 4';
  frases[4] = 'Frase 5';

  var fraseEscolhida = frases[numRan];


  alert(fraseEscolhida);
}

const {principal, txtBtn, btnFrase} = Estilos;

const inicio = () =>{
   
  return(
  <View style={principal}>
    <Image source={require('./img/logo.png')}/>

    <TouchableOpacity 
    onPress={btnmsg} style={btnFrase}>
      <Text style={txtBtn}>Nova frase </Text>
    </TouchableOpacity>
  
   </View>
  );

};

export default inicio;