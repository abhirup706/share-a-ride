// import { View, Text } from 'react-native'
import { useState, React, useCallback } from "react";
// import { StyleSheet} from 'react-native'
import Colors from "../constants/colors";
import SelectDropdown from "react-native-select-dropdown";
import { Modal, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectUserName } from '../redux/slices/dataSlice';


import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Alert,
} from "react-native";
import tailwind from 'tailwind-react-native-classnames'


import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";


const SelectCarScreen = (props) => {
  const userName = useSelector(selectUserName)
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const [cars, SetCars] = useState([
    "Honda Accord",
    "Toyota Camry",
    "Ford Mustang",
  ]);

  const onCarUpdate = (param) => {
    console.log("inside onCarUpdate Method");
    let newArr = [...cars];
    newArr.push(param);
    SetCars(newArr);
  };

  const navigation = useNavigation();
  // const cars = ["Accord", "Civic", "Camry"];
  const [modalVisible, setModalVisible] = useState(false);
  const [carModel, SetcarModel] = useState("");
  const [carColor, SetcarColor] = useState("");
  const [registrationNumber, SetRegistrationNumber] = useState("");
  const [insuranceNumber, SetInsuranceNumber] = useState("");
  const [selected, setSelected] = useState(null);
  const [buttonEnabled,setButtonEnabled] = useState(false)

  


  //   function updateCars(value) {
  //     cars.push(value);
  //     updateList();
  //   }
  //   function updateList() {
  //     dropdownlist.data = { cars };
  //   }

  return (
    // <View>
      <ScrollView
        style={{ marginHorizontal: 0, alignContent: "center", marginTop:1 }}
        keyboardShouldPersistTaps='always'
      >
        <View
          id='PO Wise Quantity'
          style={{
            // borderColor: Colors.primaryColor,
            // borderWidth: 1,
            height: '100%',
            
            justifyContent: "center",
            padding: 20,
            paddinfLeft:10,
            marginTop:0,
            backgroundColor: "white",
          }}
        >
          {/* <View
            id='PO Heading'
            style={{
              ...styles.openButton,
              backgroundColor: Colors.inactiveColor,
              alignContent: "center",
              marginHorizontal: 0,
              borderRadius: 0,
              marginTop:1,
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              Select Car
            </Text>
          </View> */}
        <View style={{flex:1,flexDirection:"row",marginTop:-15,marginBottom:10}}>
        <Text style={tailwind`text-left pb-0 pl-0 pt-0 mt-0 text-xl font-bold`}>Welcome <Text style={[tailwind`text-left pb-0 pl-0 pt-0 mt-0 text-xl font-bold`,{color:"coral"}]}>{userName}!</Text></Text>
        </View>

        <Card containerStyle={{justifyContent:"center",width:"90%",height:180, alignItems:"left",alignSelf:"center",paddingBottom:30,marginTop:-70,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        }}
            title='HELLO WORLD'
            // image={require('')}>
            >
        <Text style={[tailwind`text-center pb-0 pl-3 pt-0 mt-0 text-xl font-bold`,{marginTop:-5}]}>Select A Car</Text>


          <View
            id='DropDown'
            style={{ marginHorizontal: 20, marginLeft: 45, paddingTop: 10,paddingBottom:-5 }}
          >
            { <SelectDropdown
              id='dropdownlist'
              style={{ width: 100,borderColor:"blue",color:"blue",borderColor: Colors.primaryColor,
              borderWidth: 1,borderRadius:8 }}
            
              data={cars}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setSelected(selectedItem);
                setButtonEnabled(true);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            /> }


            
          </View>
           

          {/* <View id='AddNewCar'> */}
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  
                    <Text style={[tailwind`text-center text-2xl font-bold`,{color:"black"}]}>Add a new <Text style={[tailwind`text-center text-2xl font-bold`,{color:"coral"}]}>Car</Text></Text>


                    <View id='NameOfCar' style={{ ...styles.textInput }}>
                      <TextInput
                        placeholder='Enter model of the car'
                        style={{ marginLeft: 2 }}
                        placeholderTextColor={"grey"}
                        value={carModel}
                        onChangeText={(newcarModel) => {
                          SetcarModel(newcarModel);
                          //   onCarUpdate(newcarModel);
                        }}
                        onSubmitEditing={() => {
                          onCarUpdate(carModel);
                        }}
                      />
                    </View>

                    <View id='VehicleColor' style={{ ...styles.textInput }}>
                      <TextInput
                        placeholder='Enter Vehicle color'
                        style={{ marginLeft: 2 }}
                        placeholderTextColor={"grey"}
                        value={carColor}
                        onChangeText={(newcarColor) => {
                          SetcarColor(newcarColor);
                        }}
                      />
                    </View>

                    <View
                      id='RegistrationNumber'
                      style={{ ...styles.textInput }}
                    >
                      <TextInput
                        placeholder='Registration Number'
                        style={{ marginLeft: 2 }}
                        placeholderTextColor={"grey"}
                        value={registrationNumber}
                        onChangeText={(newregistrationNumber) => {
                          SetRegistrationNumber(newregistrationNumber);
                        }}
                      />
                    </View>

                    <View id='InsuranceNumber' style={{ ...styles.textInput }}>
                      <TextInput
                        placeholder='Enter Insurance Number:'
                        style={{ marginLeft: 2 }}
                        placeholderTextColor={"grey"}
                        value={insuranceNumber}
                        onChangeText={(newinsuranceNumber) => {
                          SetInsuranceNumber(newinsuranceNumber);
                        }}
                      />
                    </View>
                    <View style={{ marginTop:"10%",marginRight:"8%"}}>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose,{marginTop:"5%",paddingTop:"5%",backgroundColor:"firebrick"}]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonClose,{marginTop:"5%",paddingTop:"5%",backgroundColor:"olivedrab"}]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        console.log(carModel);
                        onCarUpdate(carModel);
                      }}
                    >
                      <Text style={styles.textStyle}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={[tailwind`text-white text-center pb-0 pl-0 pt-0 mt-0 text-base font-bold`,{marginTop:9}]}>Add a New Car +</Text>
              </Pressable>
            </View>
          {/* </View> */}
        </Card>
        </View>
        <View>
                <TouchableOpacity
                    style={[tailwind`py-3 m-3 mt-1 rounded-lg ${!buttonEnabled && 'bg-gray-400'}`,buttonEnabled && {backgroundColor:"olivedrab"}]}
                    disabled={!buttonEnabled}
                    onPress={() => navigation.push('NavigateCard2')}

                >
                    <Text style={tailwind`text-center text-white text-xl`}>Choose {selected}</Text>
                </TouchableOpacity>
        </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
       
    fontWeight:"bold", 
    justifyContent: 'center', 
    marginVertical: "2%", 
    marginHorizontal: "2%",
    height: 30,  
    width: 200,
    borderColor: Colors.inactiveColor, 
    borderWidth:1, 
    borderRadius: 5,
    padding:"3%",
    backgroundColor:"#ededed"
},
  image: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  openButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    marginTop: 10,
  },
  centeredView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    elevation: 2,
    width: 195,
    height: 40,
    marginTop: -10,
    marginLeft:25
  },
  buttonOpen: {
    backgroundColor: "#1a396e",
    paddingTop:-10,
  },
  buttonClose: {
    backgroundColor: "#1a396e",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})

export default SelectCarScreen;
