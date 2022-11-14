import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";



import Colors from "../constants/colors"
import { Dimensions } from 'react-native';
import { FlatList } from "react-native";


const InspectionForm = () => {

    const screenHeight = Dimensions.get('window').height
    
    const [BuyerName, SetBuyerName] = useState("")
    const [OrderQuantity, SetOrderQuantity] = useState("")
    const [OfferedQuantity, SetOfferedQuantity] = useState("")
    const [factoryRepresentative, SetFactoryRepresentative] = useState("")

    const [PackedQuantity, SetPackedQuantity] = useState("")
    const [SampleSize, SetSampleSize] = useState("")
    const [Fg1Quantity, SetFg1Quantity] = useState("")
    const [Fg2Quantity, SetFg2Quantity] = useState("")
    const [CartonSampleSize, SetCartonSampleSize] = useState("")
    const [CartonSelected, SetCartonSelected] = useState("")
    const [TotalCartons, SetTotalCartons] = useState("")
    const [MainDefectExtent, SetMainDefectExtent] = useState({"critical": "", "major": "", "minor": ""})
    const [DefectsSummary, SetDefectsSummary] = useState({"Total Critical Defect": "", "Total Major Defect": "", "Total Minor Defect": "", "Total Defect": "", "Defect Rate": ""})


    return (
        <ScrollView style={{marginHorizontal: 10, alignContent: "center"}}
            keyboardShouldPersistTaps="always"
        >
            <View id="basicInfo" style={{height: 0.6*screenHeight}}>

                <View id="buyerTextInput" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Buyer Name"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={BuyerName}
                        onChangeText = {(newChangedText) => {SetBuyerName(newChangedText)}}

                    />
                </View>
                
                <View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.29*screenHeight, marginTop: 15, borderRadius: 5, justifyContent: "center"}}>
                    

                    <View id="PO Heading" style={{...styles.openButton, marginLeft: 10, marginRight: 55, backgroundColor: Colors.inactiveColor, alignContent: "center"}}>
                        <Text style={{ color: "white", alignSelf: "center"}}>PO Number: 256</Text>
                    </View>

                    <View id="OrderOfferQuantities" style={{flexDirection: "row"}}>
                        <View id="Ordered Quantity" style={{...styles.textInput, marginHorizontal: 10, width: "40%"}}>
                            <TextInput 
                                placeholder="Order Quantity"
                                keyboardType = 'numeric'
                                placeholderTextColor={"grey"}
                                value={OrderQuantity.toString()}
                                onChangeText = {(newOrderQuantity) => {
                                    SetOrderQuantity(newOrderQuantity)
                                    SetExcessQuantity(newOrderQuantity - OfferedQuantity)
                                }}

                            />
                        </View>
                        <View id="Offered Quantity" style={{...styles.textInput, width: "40%"}}>
                            <TextInput 
                                placeholder="Offered Quantity"
                                keyboardType = 'numeric'
                                placeholderTextColor={"grey"}
                                value={OfferedQuantity.toString()}
                                onChangeText = {(newOfferedQuantity) => {
                                    SetOfferedQuantity(newOfferedQuantity)
                                    SetExcessQuantity(OrderQuantity - newOfferedQuantity)
                                }}

                            />
                        </View>
                            
                    </View>

                    <View id="Excess Quantity" style={{...styles.openButton, marginLeft: 10, marginRight: 55, backgroundColor: "white", borderColor: Colors.inactiveColor, borderWidth: 3}}>
                        <Text style={{ color: Colors.inactiveColor}}>ExcessQuantity: {OrderQuantity - OfferedQuantity}</Text>
                    </View>
                    
                                
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: Colors.primaryColor, marginTop: 15, marginLeft: 10, marginRight: 55}}
                        onPress={() => {
                            console.log("Add button pressed")
                        }}
                   >
                       <Text style={{...styles.textStyle}}>Add</Text>

                   </TouchableHighlight>
                </View>
                
                <View id="factoryRepresentative" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Factory representative person"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={factoryRepresentative}
                        onChangeText = {(newChangedText) => {SetFactoryRepresentative(newChangedText)}}
                    />
                </View>

                
            </View>




        <View id="inspectionParams" style={{height: 0.45*screenHeight, borderWidth: 1, borderColor: Colors.primaryColor}}>
            <View id="QuanityParams" style={{flexDirection: "row", alignSelf: "center", marginVertical: 20}}>
                <Text style={{marginHorizontal: 10}}>PR Quantity 10</Text>
                <Text style={{marginHorizontal: 10}}>Cut Quantity 0</Text>
                <Text style={{marginHorizontal: 10}}>Done Quantity 0</Text>
            </View>

            <View id="PackedSampledSize" style={{flexDirection: "row", alignSelf: "center", marginVertical: 20}}>
                {/* <View id="Offered Quantity" style={{...styles.textInput, width: "40%"}}> */}
                    <TextInput 
                        placeholder="Packed Quantity"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, marginHorizontal: 20, width: "40%"}}
                        value={PackedQuantity.toString()}
                        onChangeText = {(newPackedQuantity) => {
                            SetPackedQuantity(newPackedQuantity)
                            if(newPackedQuantity != "")
                            {
                                var NewSampleSize = (100 - parseInt(newPackedQuantity)).toString()
                                SetSampleSize(NewSampleSize)
                            }
                            else
                                SetSampleSize("")
                            
                        }}

                    />
                    <TextInput 
                        placeholder="Sample Size"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, width: "40%", marginHorizontal: 20}}
                        value={SampleSize.toString()}
                        onChangeText = {(newSampleSize) => {
                            SetSampleSize(newSampleSize)
                        }}

                    />
                {/* </View> */}
                
            </View>

            <View id="fg1fg2" style={{flexDirection: "row", alignSelf: "center", marginVertical: 20}}>
            
                    <TextInput 
                        placeholder="FG1 Quantity"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, marginHorizontal: 20, width: "40%"}}
                        value={Fg1Quantity.toString()}
                        onChangeText = {(newFg1Quantity) => {
                            SetFg1Quantity(newFg1Quantity)
                            if(newFg1Quantity != "")
                            {
                                var NewFg2Quantity = (100 - parseInt(newFg1Quantity)).toString()
                                SetFg2Quantity(NewFg2Quantity)
                            }
                            else
                                SetFg2Quantity("")
                        }}

                    />
                    <TextInput 
                        placeholder="FG2 Quantity"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, width: "40%", marginHorizontal: 20}}
                        value={Fg2Quantity.toString()}
                        // editable={false}
                        // onChangeText = {(newSampleSize) => {
                        //     SetSampleSize(newSampleSize)
                        // }}

                    /> 
            </View>

            <View id="cartonInfo" style={{flexDirection: "row", alignSelf: "center", marginVertical: 20}}>
                <TextInput 
                    placeholder="Carton Sample Size"
                    keyboardType = 'numeric'
                    placeholderTextColor={"grey"}
                    style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, marginHorizontal: 20, width: "40%"}}
                    value={CartonSampleSize.toString()}
                    onChangeText = {(newCartonSampleSize) => {
                        SetCartonSampleSize(newCartonSampleSize)
                    }}

                />
                <TextInput 
                    placeholder="Carton Selected"
                    keyboardType = 'numeric'
                    placeholderTextColor={"grey"}
                    style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, width: "40%", marginHorizontal: 20}}
                    value={CartonSelected.toString()}
                    // editable={false}
                    onChangeText = {(newEnteredCartonNumber) => {
                        SetCartonSelected(newEnteredCartonNumber)
                    }}

                /> 

            </View>

            <View id="totalCartons" style={{flexDirection: "row", alignSelf: "center", marginVertical: 20}}>
                <TextInput 
                    placeholder="Insert total cartons"
                    keyboardType = 'numeric'
                    placeholderTextColor={"grey"}
                    style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, marginHorizontal: 20, width: "90%"}}
                    value={TotalCartons.toString()}
                    onChangeText = {(newTotalCartons) => {
                        SetTotalCartons(newTotalCartons)
                    }}
                />
            </View>

     </View>


           
        
        <View id="defectsInfo" style={{height: 0.8*screenHeight}}>

            <View id="mainDefect" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.2*screenHeight, marginVertical: 20, alignItems: "center"}}>

                <View id="defectExtent" style={{flexDirection: "row", alignSelf: "center", marginVertical: 10}}>
                    <TextInput 
                        placeholder="Critical"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, marginHorizontal: 10, width: "17%"}}
                        value={MainDefectExtent.critical}
                        onChangeText = {(value) => {
                            var newMainDefectExtent = {"critical": value, "major": MainDefectExtent.major, "minor": MainDefectExtent.minor}
                            SetMainDefectExtent(newMainDefectExtent)
                        }}

                    />
                    <TextInput 
                        placeholder="Major"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, width: "17%", marginHorizontal: 10}}
                        value={MainDefectExtent.major}
                        // editable={false}
                        onChangeText = {(value) => {
                            var newMainDefectExtent = {"critical": MainDefectExtent.critical, "major": value, "minor": MainDefectExtent.minor}
                            SetMainDefectExtent(newMainDefectExtent)
                        }}

                    /> 
                    <TextInput 
                        placeholder="Minor"
                        keyboardType = 'numeric'
                        placeholderTextColor={"grey"}
                        style={{borderBottomColor: Colors.primaryColor, borderBottomWidth: 2, width: "17%", marginHorizontal: 10}}
                        value={MainDefectExtent.minor}
                        // editable={false}
                        onChangeText = {(value) => {
                            var newMainDefectExtent = {"critical": MainDefectExtent.critical,"major": MainDefectExtent.major, "minor": value}
                            SetMainDefectExtent(newMainDefectExtent)
                        }}
                    /> 

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: Colors.primaryColor, marginHorizontal: 10, width: "20%"}}
                        onPress={() => {
                            console.log("Add button pressed")
                        }}
                    >
                       <Text style={{...styles.textStyle}}>Add</Text>

                   </TouchableHighlight>

                </View>

            </View>

        
            <View id="DefectsSummary" style={{ borderColor: Colors.primaryColor, borderWidth: 1, height: 0.35*screenHeight, marginVertical: 20, alignItems: "center"}}>
                <FlatList
                    data={Object.keys(DefectsSummary)}
                    keyExtractor={(textInputField) => textInputField}
                    style={{}}
                    renderItem = {({item}) => {

                    return (
                        
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            {/* <Text style={{alignSelf: "center", left: 0}}>{item}</Text> */}
                            <View style={{...styles.textInput, marginHorizontal: 20, width: "70%"}}>
                                <TextInput
                                    style= {{marginLeft: 4, color: Colors.primaryColor}}
                                    placeholder={item}
                                    
                                    keyboardType = 'numeric'
                                    placeholderTextColor={"grey"}
                                    maxLength={5}
                                    // onBlur={Keyboard.dismiss}
                                    value={DefectsSummary[item]}
                                    onChangeText={(newVal) => {
                                        var newDefectsSummary = {...DefectsSummary}
                                        newDefectsSummary[item] = newVal
                                        SetDefectsSummary(newDefectsSummary)
                                        
                                    }}
                                />
                        </View>
                        </View>
                    )

                    }}
                />
            </View>
        </View>

        </ScrollView>
    )

}


const styles = StyleSheet.create({
    textInput: {
       
        fontWeight:"bold", 
        justifyContent: 'center', 
        marginVertical: 7, 
        height: 40,  
        borderColor: Colors.inactiveColor, 
        borderWidth:3, 
        borderRadius: 5},

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
export default InspectionForm

