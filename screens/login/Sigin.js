import { Block } from "expo-ui-kit";
import React from "react";
import { View } from "react-native";
import { Input, Button } from 'react-native-elements';
const Sigin = () => {
    const handleChangeText = ({ comment }) => {
    }
    return (
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Input
                label="Your Username "
                placeholder="username"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                // style={styles}
                onChangeText={value => handleChangeText({ comment: value })}
            />

            <Input
                label="Your password"
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
            <Button
                title="Login"
                icon={{
                    name: "lock-open",
                    size: 20,
                    color: "white"
                }}
                style={{flex:1,width:"100%"}}
                />
                
        </View>
                  );
            } 
export default Sigin;