import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import tailwind from 'tailwind-react-native-classnames';


const image = { uri: "https://media2.giphy.com/media/yAjIXTFgZtfn6ix3Wt/giphy.gif?cid=790b7611209a359572fe7cff6e2a2ffe67295a71f36d3072&rid=giphy.gif&ct=g" };
import Colors from "../constants/colors"
import { Dimensions } from 'react-native';

const SignupScreen = (props) => {

    const screenHeight = Dimensions.get('window').height

    const [userName, SetUserName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")
    const [rePassword, SetRePassword] = useState("")

    return (
        <View>
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
        <ScrollView style={{marginHorizontal: 10, alignContent: "center",marginTop:"15%"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.6*screenHeight, marginTop: "20%", borderRadius: 5, justifyContent: "center",marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40, backgroundColor:"white"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:"7%",justifyContent:"center"}}>
                    {/* <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:10,borderRadius:0}}> */}
                    <Text style={[tailwind`text-center mb-5 pt-10 text-2xl font-bold`,{color:"black",marginTop:"-25%"}]}>Signup </Text>
                    <Text style={[tailwind`text-center mb-5 pt-10 text-2xl font-bold`,{color:"coral",marginTop:"-25%"}]}> Today</Text>
                    {/* </View> */}
                    </View>

                   
                    

              <View id="username" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter Full Name"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={userName}
                        onChangeText = {(newUsername) => {
                            SetUserName(newUsername)
                         }}
                    />
                </View>

                <View id="email" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter UTD Email ID"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={email}
                        onChangeText = {(newEmail) => {
                            SetEmail(newEmail)
                         }}
                    />
                </View>
             
                     
                          

                <View id="password" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter Password"
                        keyboardType="password"
                        secureTextEntry={true}
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={password.toString()}
                        onChangeText = {(newPassword) => {
                            SetPassword(newPassword)
                        }}
                    />
                </View>

                <View id="confirmpassword" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Re-enter Password"
                        keyboardType="password"
                        secureTextEntry={true}
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={rePassword.toString()}
                        onChangeText = {(newRePassword) => {
                            SetRePassword(newRePassword)
                        }}
                    />
                </View>
   
                                
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "olivedrab", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('UploadScreen')
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Continue</Text>

                   </TouchableHighlight>

                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "firebrick", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            props.navigation.navigate('LoginScreen')
                        }}
                   >
                    
                       <Text style={{...styles.textStyle}}>Go Back</Text>

                   </TouchableHighlight>
                </View>

        </ScrollView>
        </ImageBackground>
    </View>
    )




}

const styles = StyleSheet.create({
    textInput: {
       
        fontWeight:"bold", 
        justifyContent: 'center', 
        marginVertical: 10, 
        marginHorizontal:10,
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
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },

    openButton: {
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            padding: 10,
            elevation: 10,
 
          }
})
export default SignupScreen

