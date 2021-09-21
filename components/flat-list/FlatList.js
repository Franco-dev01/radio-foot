import React from 'react';
import { Block, Text } from "expo-ui-kit"
import { FlatList, StyleSheet, Image } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
const DATA = [
    {
        id: 1,
        title: 'Live videos ',
        subtitle: "Suivez la Radio Dilmée",
        imgPath: require("../../assets/fauzan.jpg"),
    },
    {
        id: 2,
        title: 'Programmes',
        subtitle: "La grille des programmes",
        imgPath: require("../../assets/jc.jpg"),

    },
    {
        id: 3,
        title: 'Third Item',
        subtitle: "La grille des programmes",
        imgPath: require("../../assets/max.jpg"),

    },
    {
        id: 4,
        title: 'Third Item',
        subtitle: "La grille des programmes",
        imgPath: require("../../assets/omar.jpg"),

    },

];

const Item = ({ title, imgPath, subtitle }) => (
    <Block style={styles.item}>
        <Image
            resizeMode="cover"
            source={imgPath}
            style={styles.image}
        />
        <Text style={styles.ItemTitle}>{title} </Text>
        <Text bold style={styles.itemSubtitle}> {subtitle} </Text>

    </Block>
);


const FlatListItem = () => {
    const renderItem = ({ item }) => <Item imgPath={item.imgPath} title={item.title} subtitle={item.subtitle} />;

    const numCol = 1
    return (
        <Block style={styles.container}>
            <FlatList numColumns={numCol} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
        </Block>
    )
}

export default FlatListItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        width: "100%",
        height: "100%",
    },
    item: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height:300,
        marginTop: 5,
        borderBottomColor: "#ccc",
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom:5
    },
    ItemTitle: {
        padding: 5,
        fontSize: 16,
    },
    itemSubtitle: {
        fontSize: 18,
    },
    image: {
        flex: 1,
        width: "100%",
        height: 200,
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageBgContainer: {
        flex: 1,
        justifyContent: "space-around",
        margin: 24
    }
});
