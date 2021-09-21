import React from "react";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet } from "react-native";
import FlatListItem from "../components/flat-list/FlatList";
const Accueil = () => {
    return(
        <Block center middle style={styles.container} >
               <FlatListItem/>
        </Block>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    }
})

export default Accueil

