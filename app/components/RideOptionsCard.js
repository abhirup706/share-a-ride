import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import Screen from './Screen'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../redux/slices/navSlice'

const data = [
    {
        id: "Uber-X-123",
        title: "Riya Bhargava",
        gender: "Female",
        rating: "4.5",
        since: "7",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
        vehicle_name : "Toyota Camry",
        vehicle_color : "Black"
    },
    {
        id: "Uber-XL-456",
        title: "Abhijeet V.",
        gender: "Male",
        rating: "4.2",
        since: "7",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
        vehicle_name : "Honda Accord",
        vehicle_color : "Blue"
    },
    {
        id: "Uber-XL-911",
        title: "Alex John",
        gender: "Male",
        rating: "4.7",
        since: "7",
        multiplier: 1.9,
        image: "https://links.papareact.com/5w8",
        vehicle_name : "Tesla Model X",
        vehicle_color : "White"
    },
    {
        id: "Uber-LUX-123",
        title: "Manasi B",
        gender: "Female",
        rating:"4.9",
        since:"3",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
        vehicle_name : "Toyota Tundra",
        vehicle_color : "Black"
    },
]

const SEARCH_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const [buttonEnabled,setButtonEnabled] = useState(false)

    useEffect(() =>{
        if(!origin || !destination) navigation.push('NavigateCard')
    }, [origin, destination])

    const travelConst = (item) => {
        return ((travelTimeInformation?.duration?.value * SEARCH_CHARGE_RATE * item?.multiplier) / 100).toFixed(2)
    }

    const onChoose = () =>{
        if(!selected) return Alert.alert('Please select a ride option')
        console.log(selected?.title)
        navigation.push('HostDetails', { title1: selected?.title,multiplier1: selected?.multiplier,rating:selected?.rating, gender:selected?.gender, since:selected?.since ,vehicle_name:selected?.vehicle_name,vehicle_color:selected?.vehicle_color})
    }

    return (
        <Screen style={{height:"75%"}}>
            <View style={tailwind`items-center flex-row justify-center mb-3 mt-3`}>
                <TouchableOpacity
                    style={{ left: 10, position: 'absolute', zIndex: 100 }}
                    onPress={() => navigation.push("NavigateCard")}
                >
                    <Icon
                        type="antdesign"
                        name="arrowleft"
                        color="black"
                        size={23}
                        style={tailwind`p-3`}
                    />
                </TouchableOpacity>
                <Text style={tailwind`text-center text-xl font-bold`}>Select a Provider  |  <Text style={[tailwind`text-center text-xl font-bold`,{color:"coral"}]}>{travelTimeInformation?.distance?.text}</Text></Text>
            </View>
            <View style={tailwind`flex-1 mt-2`}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tailwind`flex-row items-center justify-between px-5 ${selected?.id === item.id && 'bg-gray-100'}`}
                            onPress={() => {
                                setSelected(item);
                                setButtonEnabled(true);
                            }}
                        >
                            {/* <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                            /> */}
                            <View style={tailwind`mr-5 p-2 mb-2 rounded-full border-2`}>
                                <Icon name="user" type="font-awesome" color="black" size={25}/>
                            </View>
                            <View style={tailwind`flex-row items-center justify-between flex-1`}>
                                <View>
                                    <Text style={tailwind`text-xl font-bold text-black`}>{item.title}</Text>
                                    <Text style={tailwind`text-gray-600`}>{travelTimeInformation?.duration?.text} Travel time</Text>
                                </View>
                                <Text style={tailwind`text-gray-800 text-lg`}>
                                    {/* {new Intl.NumberFormat('en-us', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(
                                        travelConst(item)
                                    )} */}
                                    ${travelConst(item)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={[tailwind`py-3 m-3 mt-1 rounded-lg ${!buttonEnabled && 'bg-gray-400'}`,buttonEnabled && {backgroundColor:"olivedrab"}]}
                    disabled={!buttonEnabled}
                    onPress={onChoose}
                >
                    {buttonEnabled && 
                    <Text style={tailwind`text-center text-white text-xl`}>Ride With {selected?.title}</Text>
                    }
                    {
                        !buttonEnabled && 
                        <Text style={tailwind`text-center text-white text-xl`}>Select a Host to Proceed</Text>
                    }
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})
