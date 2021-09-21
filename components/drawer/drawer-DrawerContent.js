import * as React from 'react';
import { DrawerItem } from "@react-navigation/drawer";
import { Block } from "expo-ui-kit";
import { ImageBackground, StyleSheet } from "react-native";
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
} from "react-native-vector-icons";

const rfLogo = require("../../assets/rf-logo.jpg");

const DrawerContent = (props) => {
    return (
        <Block style={styles.container}>
            <Block style={styles.first_item1}>
                <ImageBackground 
                source={rfLogo}
                resizeMode="cover"
                style={styles.image}
                >
                </ImageBackground>

            </Block>
            <Block style={styles.first_item2}>
            <DrawerItem  {...props}
                        label="Accueil"
                        labelStyle={styles._label}
                        icon={() => (
                            <MaterialCommunityIcons
                                name="home"
                                color="black"
                                size={30}
                            />
                        )}
                        onPress={() => props.navigation.navigate("Accueil")}
                    />
                <DrawerItem  {...props}
                    label="News"
                    labelStyle={styles._label}
                    icon={({ color, size }) => (
                        <AntDesign
                            name="notification"
                            color="black"
                            size={30}
                        />
                    )}
                onPress={() => props.navigation.navigate("Sigin")}
                />
                <DrawerItem  {...props}
                    label="Live"
                    labelStyle={styles._label}
                    icon={({ color, size }) => (
                        <AntDesign
                            name="playcircleo"
                            color="black"
                            size={30}
                        />
                    )}
                // onPress={() => props.navigation.navigate("Contacts")}
                />
                <DrawerItem  {...props}
                    label="Compétitions"
                    labelStyle={styles._label}
                    icon={({ color, size }) => (
                        <FontAwesome
                            name="video-camera"
                            color="black"
                            size={30}
                        />
                    )}
                // onPress={() => props.navigation.navigate("Contacts")}
                />
            </Block>
        </Block>

    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "green"
    },
    first_item1: {
        flex: 2,

        backgroundColor: "#a90000",
        justifyContent: 'center',
        color: '#fff',
        opacity: 0.9
    },
    first_item2: {
        flex: 6,
        backgroundColor: "#fff",
    },
    _label: {
        color: "black",
        fontSize: 20
    },
    image:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})