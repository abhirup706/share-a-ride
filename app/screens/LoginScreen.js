import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import tailwind from 'tailwind-react-native-classnames';
import Logo from '../assets/logo.png';


import Colors from "../constants/colors";
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = (props) => {


    const email = "abhirup@gmail.com"
    const pswd = "password"
    const screenHeight = Dimensions.get('window').height

    const [userName, SetUserName] = useState("")
    const [password, SetPassword] = useState("")

    return (
        <View>
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
        <ScrollView style={{marginHorizontal: 10, alignContent: "center",marginTop:"20%"}}
            keyboardShouldPersistTaps="always">



<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.6*screenHeight, marginTop: 15, borderRadius: 5, justifyContent: "center",marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40, backgroundColor:"white"}}>

        <View>
            <Image source={Logo} style={styles.verified}/>
        </View>
        
        <Text style={[tailwind`text-center mb-5 text-2xl font-bold`,{color:"black",marginTop:"-25%"}]}>Login To Your Account</Text>
     

              <View id="username" style={{...styles.textInput}}>
                    <TextInput
                        placeholder="Username"
                        style={{marginLeft: "5%"}}
                        placeholderTextColor={"grey"}
                        value={userName}
                        onChangeText = {(newUsername) => {
                            SetUserName(newUsername)
                         }}
                    />
                </View>




                <View id="password" style={{...styles.textInput}}>
                    <TextInput
                        placeholder="Password"
                        style={{marginLeft: "5%"}}
                        placeholderTextColor={"grey"}
                        secureTextEntry={true}
                        value={password.toString()}
                        onChangeText = {(newPassword) => {
                            SetPassword(newPassword)
                        }}
                    />
                </View>


                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: Colors.primaryColor, marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            if(userName==email && pswd==password){
                                props.navigation.navigate('WelcomeScreen')
                            }
                            else{
                                alert("Username or password is Incorrect")
                            }

                        }}
                   >

                    <Text style={{...styles.textStyle,color:"white"}}>Login</Text>

                   </TouchableHighlight>
                   <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
                   <Text style={{...styles.textStyle,marginTop:"10%"}}>Dont have an account?</Text>
                    <TouchableOpacity
                            
                            onPress={() => {
                                console.log("Signup button Pressed")
                                props.navigation.navigate('SignupScreen')
                            }}
                            style={{marginTop:"30%"}}
                    >

                    <Text style={{...styles.textStyle,color:"blue"}}> SignUp Now!</Text>

                   </TouchableOpacity>
                   </View>
 
                </View>

        </ScrollView>
        </ImageBackground>
    </View>
    )




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    textInput: {

        fontWeight:"bold",
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal:10,
        marginTop:0,
        height: 50,
        borderColor: Colors.inactiveColor,
        borderWidth:1,
        borderRadius: 5,
        padding:5,
        backgroundColor:"#ededed"
    },
    image: {
        justifyContent: "center",
        width: "100%",
        height: "100%"
      },


    textStyle: {
            color: "black",
            fontWeight: "bold",
            textAlign: "center"
          },

    openButton: {
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            padding: 10,
            elevation: 10,

          },
          verified:{
            justifyContent: "center",
            width:"70%",
            height:"40%",
            marginLeft:"15%",
            paddingTop:"20%",
            resizeMode:"contain",
          }
})
export default LoginScreen

