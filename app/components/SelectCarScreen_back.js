// import { View, Text } from 'react-native'
import { useState, React, useCallback } from "react";
// import { StyleSheet} from 'react-native'
import Colors from "../constants/colors";
import SelectDropdown from "react-native-select-dropdown";
import { Modal, Pressable } from "react-native";
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


import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";


const SelectCarScreen_back = (props) => {
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
  // const cars = ["Accord", "Civic", "Camry"];
  const [modalVisible, setModalVisible] = useState(false);
  const [carModel, SetcarModel] = useState("");
  const [carColor, SetcarColor] = useState("");
  const [registrationNumber, SetRegistrationNumber] = useState("");
  const [insuranceNumber, SetInsuranceNumber] = useState("");

  //   function updateCars(value) {
  //     cars.push(value);
  //     updateList();
  //   }
  //   function updateList() {
  //     dropdownlist.data = { cars };
  //   }

  return (
    <View>
      <ScrollView
        style={{ marginHorizontal: 10, alignContent: "center" }}
        keyboardShouldPersistTaps='always'
      >
        <View
          id='PO Wise Quantity'
          style={{
            borderColor: Colors.primaryColor,
            borderWidth: 1,
            height: 0.5 * screenHeight,
            marginTop: 15,
            borderRadius: 5,
            justifyContent: "center",
            marginTop: 100,
            borderRadius: 5,
            justifyContent: "center",
            padding: 40,
            backgroundColor: "white",
          }}
        >
          <View
            id='PO Heading'
            style={{
              ...styles.openButton,
              backgroundColor: Colors.inactiveColor,
              alignContent: "center",
              marginHorizontal: 10,
              borderRadius: 0,
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              Select Car
            </Text>
          </View>
          <View
            id='DropDown'
            style={{ marginHorizontal: 20, marginLeft: 45, paddingTop: 20 }}
          >
            <SelectDropdown
              id='dropdownlist'
              style={{ width: 100 }}
              data={cars}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
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
            />
          </View>
          <View id='AddNewCar'>
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
                    <Text style={styles.modalText}>Add New Car</Text>

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

                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        console.log(carModel);
                        onCarUpdate(carModel);
                      }}
                    >
                      <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>Add car</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    fontWeight: "bold",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    height: 50,
    borderColor: Colors.inactiveColor,
    borderWidth: 3,
    borderRadius: 5,
    padding: 5,
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
    marginTop: 22,
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
    borderRadius: 2,
    padding: 5,
    elevation: 2,
    width: 195,
    height: 50,
    marginTop: 50,
  },
  buttonOpen: {
    backgroundColor: "#1a396e",
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

export default SelectCarScreen_back;
