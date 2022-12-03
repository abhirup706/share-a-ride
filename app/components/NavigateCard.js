import React ,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAP_APIKEY } from '@env'
import { setDestination,setOrigin } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useSelector } from 'react-redux'
import { selectUserName } from '../redux/slices/dataSlice'

// const GOOGLE_MAP_APIKEY = ""
const GOOGLE_MAP_APIKEY = "AIzaSyA2NZvrKgSRaGgu2FW3SMPPAAfwBtAGKgo"

const NavigateCard = () => {

    const userName = useSelector(selectUserName)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDateVisible,setDateVisibility] = useState(false)
    const [chosenDate,setChosenDate] = useState(moment(new Date()).format('DD-MM-YYYY hh:mm A'))

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

    return (
        <Screen style={tailwind`bg-white flex-1 mt-0 pt-5`}>
            <View style={{flex:1,flexDirection:"column",maxHeight:"42%"}}>
            <Text style={tailwind`text-left pb-0 pl-5 pt-0 mt-0 text-xl font-bold`}>Welcome <Text style={[tailwind`text-left pb-0 pl-5 pt-0 mt-0 text-xl font-bold`,{color:"coral"}]}>{userName}!</Text></Text>
            
            {isDateVisible &&
                <Text 
            style={{color:"indianred",marginLeft:"5%",marginBottom:"5%"}}
            isVisible={isDateVisible}>Booking ride for {chosenDate}</Text>
            }
            </View>
            <View style={[tailwind`border-t border-gray-100 flex-shrink relative z-20 bg-white`,{marginTop:"-20%"}]}>
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
                        styles={{...toInputBoxStyles,paddingTop:"10%"}}
                        enablePoweredByContainer={false}
                    />
                </View>
            </View>
            <View style={tailwind`px-2 bg-white relative z-10 justify-between flex-1 mt-0`}>

                <View style={tailwind`mt-0 flex-row justify-evenly py-3 mb-0 pb-10 border-t border-gray-100`}>
                    <TouchableOpacity
                        style={[tailwind`flex-row bg-white h-10 px-4 py-3 rounded-full border border-black`,{backgroundColor:"olivedrab"}]}
                        onPress={() => navigation.push('RideOptionsCard')}
                    >
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tailwind`text-white text-center pl-3`}>Ride Now</Text>
                    </TouchableOpacity>
                    {!isDateVisible && 
                    <TouchableOpacity
                        style={[tailwind`flex-row bg-white h-10 px-4 py-3 rounded-full border border-black`]}
                        onPress={showDatePicker}
                    >

                        <Icon name="calendar" type="font-awesome" color="black" size={14} />
                        <Text style={tailwind`text-black text-center pl-3`}>Schedule</Text>
                    </TouchableOpacity>
                    }
                    {isDateVisible &&
                    <TouchableOpacity
                    style={[tailwind`flex-row bg-white h-10 px-4 py-3 rounded-full border border-black`]}
                    onPress={() => navigation.push('RideOptionsCard')}
                    >

                    <Text style={tailwind`text-black text-center pr-3`}>Continue</Text>
                    <Icon name="arrow-right" type="font-awesome" color="black" size={14} />
                    </TouchableOpacity>

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

export default NavigateCard

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
