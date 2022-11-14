import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import tailwind from 'tailwind-react-native-classnames';


const image = { uri: "https://media2.giphy.com/media/yAjIXTFgZtfn6ix3Wt/giphy.gif?cid=790b7611209a359572fe7cff6e2a2ffe67295a71f36d3072&rid=giphy.gif&ct=g" };
import Colors from "../constants/colors"
import { Dimensions } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

  
  const CELL_COUNT = 6;

const VerificationScreen = (props) => {

    const screenHeight = Dimensions.get('window').height


    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

    

    return (
      <View>
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
        <ScrollView style={{marginHorizontal: 10, alignContent: "center",marginTop:"15%"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40, backgroundColor:"white"}}>
                    

                <View style={{flex:1,flexDirection:"row",marginTop:"10%",justifyContent:"center"}}>
                    {/* <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:10,borderRadius:0}}> */}
                    <Text style={[tailwind`text-center mb-5 pt-10 text-2xl font-bold`,{color:"black",marginTop:"-25%"}]}>Account </Text>
                    <Text style={[tailwind`text-center mb-5 pt-10 text-2xl font-bold`,{color:"coral",marginTop:"-25%"}]}> Verification</Text>
                    {/* </View> */}
                    </View>

                   
                    

                    <SafeAreaView style={styles.root}>
                    <Text style={[tailwind`text-center mb-5 pt-10 text-base font-bold`,{color:"steelblue",marginTop:"-40%"}]}>Please enter the 6-digit verification code receieved on your e-mail </Text>
      <CodeField
        ref={ref}
        {...prop}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue} 
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>

                                
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "olivedrab", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Verified button Pressed")
                            props.navigation.navigate('VerifiedScreen')
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
        padding:5,
        backgroundColor:"#ededed"
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
 
          },
          root: {flex: 1, padding: 20},
          title: {textAlign: 'center', fontSize: 15,marginTop:20,marginHorizontal:10},
          codeFieldRoot: {marginTop: 20},
          cell: {
            width: 40,
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
})
export default VerificationScreen

