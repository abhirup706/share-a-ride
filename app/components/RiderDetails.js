import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert,Platform,Linking } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Icon, Card } from 'react-native-elements'
import Screen from './Screen'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../redux/slices/navSlice'
import { Root, Popup } from 'react-native-popup-confirm-toast'


const SEARCH_CHARGE_RATE = 1.5

const RiderDetails = ({ route}) => {

    const { title1,multiplier1 ,rating,gender,since,vehicle_name,vehicle_color,passengers} = route.params;
    const navigation = useNavigation()
    // const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    useEffect(() =>{
        if(!origin || !destination) navigation.push('NavigateCard')
    }, [origin, destination])

    const travelConst = (multiplier1) => {
        return ((travelTimeInformation?.duration?.value * SEARCH_CHARGE_RATE * multiplier1) / 100).toFixed(2)
    }

    const onChoose = () =>{
        console.log(title1)
        navigation.push('SuccessScreenProvider', { data: {vehicle_name: vehicle_name, vehicle_color:vehicle_color, title: title1,multiplier : multiplier1, distance: travelTimeInformation?.distance?.text, time: travelTimeInformation?.duration.text, price: travelConst(multiplier1),passengers: passengers} })
    }
    

    const openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
          number = 'telprompt:${091123456789}';
        } else {
          number = 'tel:${091123456789}';
        }
        Linking.openURL(number);
      };

      const openMessageApp = () => {
        let number = '';
        if (Platform.OS === 'ios') {
          number = 'telprompt:${091123456789}';
        } else {
          number = 'tel:${091123456789}';
        }
        Linking.openURL(`sms:091123456789`);
      };

      

    return (
        <Root>
        <Screen style={[tailwind`bg-white pl-3`,{justifyContent:"center",height:"90%",marginTop:0}]}>
        <View style={{marginBottom:30, position: 'absolute', top: -20, left: 0, right: 0, bottom: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Card containerStyle={{justifyContent:"center",width:"90%", alignItems:"center",alignSelf:"center",paddingBottom:30,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        }}
            title='HELLO WORLD'
            // image={require('')}>
            >
            <View style={{flex:1,flexDirection:"row"}}>
                <View style={{marginTop:"13%"}}>
                <Image 
                    
                    source={{
                        uri: 'https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg'
                    }} 
                    style={{width: 100, height: 100, borderRadius: 400/ 2,borderColor:"grey",borderWidth:2}} 
                />
                </View>
                <View style={{marginLeft:15}}>
                    <View >
                        <Text style={tailwind`text-center text-black text-2xl font-bold`}>Rider Details</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <Text style={tailwind`text-center text-black text-lg font-bold`}>Name: </Text>
                        <Text style={[tailwind`text-center text-black text-lg pl-5`,{paddingRight:10}]}>{title1}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row", marginTop:-5}}>
                        <Text style={tailwind`text-center text-black text-lg font-bold`}>Rating: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-5`}>{rating}</Text>
                        <Icon
                        type="antdesign"
                        name="star"
                        color="goldenrod"
                        size={20}
                        style={tailwind`pl-2 pt-0.5`}
                    />
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:-5}}>
                        <Text style={tailwind`text-center text-black text-lg font-bold`}>Gender: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-2`}>{gender}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:-5}}>
                        <Text style={tailwind`text-center text-black text-lg font-bold`}>Passengers: </Text>
                        <Text style={tailwind`text-center text-black text-lg pl-2`}>{passengers}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",marginTop:5}}>
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:40,
                            height:40,
                            backgroundColor:'#01a699',
                            borderRadius:50,
                            }}
                            onPress={()=>openDialScreen()}
                    >
                        <Icon name="phone" type="fontawesome" size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            marginHorizontal:30,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:40,
                            height:40,
                            backgroundColor:'cornflowerblue',
                            borderRadius:50,
                            
                            }}
                            onPress={()=>openMessageApp()}
                    >
                        <Icon name="chat-bubble" type="materialicons" size={25} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:40,
                            height:40,
                            backgroundColor:'firebrick',
                            borderRadius:50,
                            
                            }}
                            onPress={() =>
                                Alert.alert(
                                    'Cancel Ride',
                                    'Are you sure you want to cancel the ride?', // <- this part is optional, you can pass an empty string
                                    [
                                      {text: 'Cancel', onPress: () => console.log('OK Pressed')},
                                      {text: 'Confirm', onPress: () => 
                                      Alert.alert(
                                          'Cancel Ride',
                                          'Your ride has been cancelled!', // <- this part is optional, you can pass an empty string
                                          [{text: 'Go Home',onPress:() => navigation.push('NavigateCard')}],
                                          {cancelable: false},
                                        )},
                                    ],
                                    {cancelable: false},
                                  )
                              }
                    >
                        <Icon name="cross" type="entypo" size={25} color="white" />
                    </TouchableOpacity>

                    </View>
                </View>
            </View>
            
        </Card>
        </View>
            {/* <View> */}
                <TouchableOpacity
                    style={[tailwind`bg-black py-3 mt-0 mr-4 rounded-lg`,{backgroundColor:"olivedrab",position:"center",position: 'relative', top: 80, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}]}
                    onPress={onChoose}
                
                >
                    <Text style={tailwind`text-center text-white text-xl`}>Start Carpooling</Text>
                </TouchableOpacity>
            {/* </View> */}

        </Screen>
        </Root>
    )
}

export default RiderDetails

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})
