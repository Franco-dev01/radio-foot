import * as React from 'react';
import { StyleSheet } from "react-native";
import { Text, Block } from "expo-ui-kit";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign} from "react-native-vector-icons";

import Accueil from "../../screens/Accueil";
import Messages from "../../screens/Messages";
import Contacts from "../../screens/Contacts";
import DrawerContent from './drawer-DrawerContent';
import Sigin from '../../screens/login/Sigin';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: true,
                headerShown:true,
                headerLeft: () => (
                    <Block style={styles.bar}>
                        <AntDesign
                            onPress={() => navigation.openDrawer()}
                            name="bars"
                            color="white"
                            size={50}
                        />
                    </Block>
                ),
                headerTitle: () =>(
                    <Block>
                        <Text color="red">Radio Foot</Text>
                    </Block>
                    
                ),
            }}
        >
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Sigin" component={Sigin} />
        </Stack.Navigator>
    )
}



export default () => {
    return (
        <Drawer.Navigator initialRouteName="Accueil"
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Screens" component={Screens} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        color:"#fff",
        backgroundColor: "#010c1e",
        width: 450,
        height: 20,
    },
    _title: {
        marginLeft: "10%",
        marginBottom:"10%",
        color: "#fff",
        fontSize: 35,


    },
    icon: {
        color: "black",
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
});