import React, { useState } from "react";
import tailwind from 'tailwind-react-native-classnames'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import { useSelector } from 'react-redux'
import { selectUserName } from '../redux/slices/dataSlice'



import Colors from "../constants/colors";
import { Dimensions } from 'react-native';
import Logo from '../assets/logo.png';

import {
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { SafeAreaView } from "react-native-web";

  
  const CELL_COUNT = 6;

const WelcomeScreen = (props) => {
    const userName = useSelector(selectUserName)

    const screenHeight = Dimensions.get('window').height
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

    

    return (
      <View style={{backgroundColor:"white"}}>
        <View style={{marginTop:"20%",marginLeft:"5%"}}>
        <Text style={tailwind`text-left pb-0 pl-5 pt-0 mt-0 text-4xl font-bold`}>Welcome</Text>
        <Text style={[tailwind`text-left pb-0 pl-5 pt-0 mt-0 text-4xl font-bold`,{color:"coral"}]}>{userName}!</Text>
        </View>
        {/* <ImageBackground source={require('../assets/background.png')} style={styles.image}> */}
        <ScrollView style={{marginHorizontal: "3%", alignContent: "center",backgroundColor:"white"}}
            keyboardShouldPersistTaps="always"
        >

      <View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 0, height: 0.5*screenHeight, marginTop: "10%", borderRadius: 5, justifyContent: "center",paddingTop:"20%", marginTop:"10%", marginBottom:"100%", backgroundColor:"white"}}>
                    

      

                   

                <Image source={Logo} style={styles.verified}/>

                <Text style={[tailwind`text-center pb-0 pl-0 pt-0 mt-4 text-3xl font-bold`,{color:"black"}]}>Choose Your Role</Text>
                  
                  <View style={{marginTop:"2%"}}>
                  <Text style={[tailwind`text-center pb-0 pl-0 pt-1 mb-2 text-lg`,{color:"black"}]}>Share a ride as a passenger</Text>  
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "coral", marginBottom: "5%", marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('MapScreen')
                        }}
                   >
                    
                    
                    
                    <Text style={[tailwind`text-center pb-0 pl-0 pt-1 mb-2 text-base font-bold`,{color:"white"}]}>Rider</Text>


                   </TouchableHighlight>

                    </View>
                    <View>
                    <Text style={[tailwind`text-center pb-0 pl-0 pt-1 mb-2 text-lg`,{color:"black"}]}>Share a ride as a host</Text> 
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "cornflowerblue", marginHorizontal:"5%"}}
                        onPress={() => {
                            console.log("Provider button Pressed")
                            props.navigation.navigate('MapScreenProvider')
                        }}
                   >
                    
                       <Text style={[tailwind`text-center pb-0 pl-0 pt-1 mb-2 text-base font-bold`,{color:"white"}]}>Provider</Text>

                    </TouchableHighlight>
                    </View>

                </View>

        </ScrollView>
        {/* </ImageBackground> */}
        </View>
    );

};

const styles = StyleSheet.create({
    textInput: {
       
        fontWeight:"bold", 
        justifyContent: 'center', 
        marginVertical: 10, 
        marginHorizontal:10,
        height: 50,  
        borderColor: Colors.inactiveColor, 
        borderWidth:3, 
        borderRadius: 5,
        padding:8
    },


    textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"

          },

    openButton: {
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            padding: 8,
            elevation: 10,
            width:200,
            marginLeft:"23%"
 
          },
          root: {flex: 1, padding: 20},
          title: {textAlign: 'center', fontSize: 15,marginTop:20,marginHorizontal:10},
          codeFieldRoot: {marginTop: 20},
          cell: {
            width: 20,
            height: 40,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 2,
            borderColor: '#00000030',
            textAlign: 'center',
          },
          focusCell: {
            borderColor: '#000',
          },
          image: {
            justifyContent: "center",
            width: "100%",
            height: "100%"
          },
          verified:{
            justifyContent: "center",
            width:"70%",
            height:"35%",
            resizeMode:"contain",
            marginLeft:"15%",
            marginTop:"0%"
          }
})
export default WelcomeScreen

