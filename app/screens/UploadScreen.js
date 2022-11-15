import React, { useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import RNPickerSelect from "react-native-picker-select";  
import tailwind from 'tailwind-react-native-classnames';


import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  ImageBackground
} from "react-native";


import Colors from "../constants/colors"
import { Dimensions } from 'react-native';



const UploadScreen = (props) => {

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result.uri);
        console.log(result);
        alert("Selected File: "+result.name)
        SetDocument(result.name)
        return result.name
    }

    const [document, SetDocument] = useState();

    const screenHeight = Dimensions.get('window').height
    const [email, SetEmail] = useState("")

    return (
        <View>
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
        <ScrollView style={{marginHorizontal: "5%", alignContent: "center",marginTop:"15%"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, borderRadius: 5, justifyContent: "center",marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40, backgroundColor:"white"}}>
                    

        <View style={{marginTop:"5%",marginLeft:"5%"}}>
            <Text style={tailwind`text-center pb-0 pl-0 pt-0 mt-0 text-3xl font-bold`}>Upload Your</Text>
            <Text style={[tailwind`text-center pb-0 pl-0 pt-0 mt-0 text-3xl font-bold`,{color:"coral"}]}>Identity Proof</Text>
        </View>

                   
            <View style={{flexDirection:"row"}}>
            
            <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "grey", marginTop: 15, marginHorizontal:10,flex:1}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            pickDocument()
                            
                            
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Upload From Device 📑</Text>

                   </TouchableHighlight>
                   
              </View>  
              <View>
                <Text>{document}</Text>
                </View>     

              <View id="idType" style={{...styles.textInput,margin:20}}>
                     <RNPickerSelect
                     placeholder={{
                        label:'Select an item',
                        value: null,
                     }}
                     placeholderTextColor="red"
                      onValueChange={(selected) => console.log(selected)}
                      items={[
                          { label: "Driving License", value: "Driving License" },
                          { label: "Passport", value: "Passport" },
                 ]}
             />
                </View>

                <View id="idNumber" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter Document Number"
                        style={{marginLeft: "2%"}}
                        placeholderTextColor={"grey"}
                        value={email}
                        onChangeText = {(newEmail) => {
                            SetEmail(newEmail)
                         }}
                    />

                    
                </View>
                <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "olivedrab", marginTop: "5%", marginHorizontal:"4%"}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('VerificationScreen')
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Continue</Text>

                   </TouchableHighlight>

                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "firebrick", marginTop: "5%", marginHorizontal:"4%"}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            props.navigation.navigate('SignupScreen')
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
        marginVertical: "3%", 
        marginHorizontal:"3%",
        height: "12%",  
        borderColor: Colors.inactiveColor, 
        borderWidth:1, 
        borderRadius: 5,
        padding:5,
        backgroundColor:"#ededed"
    },

    dropDown:{

    },
    image: {
        justifyContent: "center",
        width: "100%",
        height: "100%",
        
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

export default UploadScreen

