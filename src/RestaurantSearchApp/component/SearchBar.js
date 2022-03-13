import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
      marginTop:10 ,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
     fontSize:18,
    flex: 1,
  },
  iconStyle:{
     fontSize:35,
     alignSelf:'center' ,
     marginHorizontal:15
  }
});
