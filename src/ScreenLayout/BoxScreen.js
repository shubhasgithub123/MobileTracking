import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const BoxScreen = () => {
  return (
    <>
     <View style={styles.viewStyle}>
       <Text style={[styles.textStyle,{backgroundColor:'red'}]}>Child #1</Text>
       <Text style={[styles.textStyle,{marginTop:50,backgroundColor:'green',color:'pink',alignSelf:'flex-end'}]}>Child #2</Text>
       <Text style={[styles.textStyle,{backgroundColor:'yellow'}]}>Child #3</Text>
     </View>
    
   </>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle:{
     flexDirection:'row',
     justifyContent:'space-between',
     borderWidth:3,
     height:300
  },
  textStyle:{
 
   width:50,
   height:50
  }
});
