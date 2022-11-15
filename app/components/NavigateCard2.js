import React ,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination,setOrigin } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
//import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import Colors from "../constants/colors";
import SelectDropdown from "react-native-select-dropdown";

// const GOOGLE_MAP_APIKEY = ""
const GOOGLE_MAP_APIKEY = "AIzaSyA2NZvrKgSRaGgu2FW3SMPPAAfwBtAGKgo"

const NavigateCard2 = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDateVisible,setDateVisibility] = useState(false)
    const [chosenDate,setChosenDate] = useState(moment(new Date()).format('DD-MM-YYYY hh:mm A'))
    const [isPassengerVisible,setPassengerVisibility] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

      const handleConfirm = (date) => {
        hideDatePicker();
        setChosenDate(moment(date).format('DD-MM-YYYY hh:mm A'))
        setDateVisibility(true)
      };
      const setBackDate = () => {
        setDateVisibility(false)
        setPassengerVisibility(false)
      }

    return (
        <Screen style={tailwind`bg-white flex-1 mt-0 pt-5`}>
            <View style={{flex:1,flexDirection:"column",marginBottom:0,maxHeight:"42%"}}>
            <Text style={tailwind`text-left pb-0 pl-5 pt-0 mt-0 text-xl font-bold`}>Welcome, Abhirup!</Text>
            {isDateVisible &&
                <Text 
            style={{color:"indianred",marginLeft:"5%",marginBottom:"1%"}}
            isVisible={isDateVisible}>Hosting ride on {chosenDate}</Text>
            }
            {isPassengerVisible &&
                <Text 
            style={[tailwind`text-left pb-1 pl-5 pt-0 font-bold`,{color:"indianred"}]}
            isVisible={isPassengerVisible}>Hosting ride for {selectedNumber} passengers</Text>
            }
            </View>
            <View style={[tailwind`border-t border-gray-100 flex-shrink relative z-20 bg-white`,{marginTop:-70}]}>
                <View style={tailwind`bg-white pb-2`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where do you want to ride from?'
                        textInputProps={{
                            placeholderTextColor: 'grey',
                            returnKeyType: "search"
                          }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={{...toInputBoxStyles}}

                        enablePoweredByContainer={false}
                    />
                    <GooglePlacesAutocomplete
                        placeholder='Where are you going?'
                        textInputProps={{
                            placeholderTextColor: 'grey',
                            returnKeyType: "search"
                          }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={{...toInputBoxStyles,paddingTop:10}}
                        enablePoweredByContainer={false}
                    />
                </View>
            </View>
            <View style={[tailwind`px-2 bg-white relative z-10 justify-between flex-1 mt-0`, {margin:40}]}>

                <View style={[tailwind`mt-0 flex-row justify-evenly py-3 mb-0 pb-10 border-t border-gray-100`]}>
                {!isDateVisible && !isPassengerVisible &&
                    
                    <TouchableOpacity
                    style={[tailwind`bg-black py-3 m-3 rounded-lg rounded-full border border-black`,{backgroundColor:"olivedrab"},{paddingTop:7}]}
                    onPress={showDatePicker}
                >
                    
                    <Text style={[tailwind`text-center text-white text-xl`,{paddingLeft:30},{paddingRight:10,marginTop:5}]}>Schedule           <Icon name="calendar" type="font-awesome" color="white" size={18}  /></Text>
                </TouchableOpacity>
                    }
                    {isDateVisible && !isPassengerVisible &&
                    <><View style={[tailwind`mt-1 flex-row`]}>
                           <Text style={{marginLeft:"32%",marginTop:"0%", fontSize:20}}>I can pickup</Text>
                           <View
            id='DropDown'
            style={{ marginHorizontal: 20, marginLeft: 15, paddingTop: 0,paddingBottom:10 ,marginBottom:10}}
          >
            { <SelectDropdown
              id='dropdownlist'
              style={{ width: 100,borderColor:"blue",color:"blue",borderColor: Colors.primaryColor,
              borderWidth: 1,borderRadius:8 }}
                buttonStyle={{width:80,height:35,paddingBottom:10}}
                defaultButtonText={'0'}
              data={[1,2,3]}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setSelectedNumber(selectedItem);
                setPassengerVisibility(true)
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


            
          </View><Text style={{fontSize:20}}>Passengers</Text>
                      </View>
                        <View style={[tailwind`flex-row bg-white h-20 px-4 py-3`,{marginTop:"10%"},{marginRight:"80%",marginLeft:"-10%"}]}>
                            <TouchableOpacity
                                style={[tailwind`flex-row bg-white h-10 pr-4 rounded-full border border-black`,{backgroundColor:"white"},{paddingTop:"9%"},{paddingLeft:"20%"}]}
                                onPress={setBackDate}
                            >
                            <Text style={[tailwind`text-black pl-4`,{marginRight:"5%",width:70}]}>Back</Text>
                            </TouchableOpacity>        
                        </View></>
                    }
                    {isDateVisible && isPassengerVisible &&
                    
                    <><TouchableOpacity
                    style={[tailwind`flex-row bg-white h-10 px-4 py-3 rounded-full border border-black`,{backgroundColor:"white"}]}
                    onPress={setBackDate}
                >
                        <Text style={tailwind`text-black pl-3 px-4`}>Back</Text>
                    </TouchableOpacity><TouchableOpacity
                            style={[tailwind`flex-row bg-white h-10 px-4 py-3 rounded-full border border-black`,{backgroundColor:"olivedrab"}]}
                            onPress={() => navigation.push('RideOptionsCard2',{passengers:selectedNumber})}
                        >

                            <Text style={[tailwind`text-white text-center pr-2`]}>Continue</Text>
                            <Icon name="arrow-right" type="font-awesome" color="white" size={14} />
                        </TouchableOpacity></>
                    }
                    <DateTimePickerModal
                        style={{height:200}}
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
            </View>
        </Screen>
    )
}

export default NavigateCard2

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 10,
        position:"relative"
        
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        borderEndWidth: 1,
        borderColor: '#ddd'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
        marginBottom:0
    },
    boxSimple: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 1,
        margin: 2,
        height:10,
    },
})
