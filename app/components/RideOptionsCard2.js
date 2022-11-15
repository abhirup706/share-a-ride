import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import Screen from './Screen'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../redux/slices/navSlice'
//import { passengers } from './NavigateCard2'

export const sendData = []
const data = [
    {
        id: "Uber-X-123",
        title: "Riya Bhargava",
        gender: "Female",
        rating: "4.5",
        since: "7",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-XL-456",
        title: "Abhijeet Vaghela",
        gender: "Female",
        rating: "4.5",
        since: "7",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-XL-911",
        title: "Alex John",
        gender: "Female",
        rating: "4.5",
        since: "7",
        multiplier: 1.9,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-123",
        title: "Manasi Barhan Purkar",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

const SEARCH_CHARGE_RATE = 1.5

const RideOptionsCard2 = ({route}) => {
    const {passengers} = route.params;
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
     

    useEffect(() =>{
        if(!origin || !destination) navigation.push('NavigateCard')
    }, [origin, destination])

    const travelConst = (item) => {
        return ((travelTimeInformation?.duration?.value * SEARCH_CHARGE_RATE * item?.multiplier) / 100).toFixed(2)
    }

    const onChoose = () =>{
        if(!selected) return Alert.alert('Please select a ride option')
        console.log(selected?.title)
        sendData.push({title1: selected?.title,multiplier1: selected?.multiplier,rating:selected?.rating, gender:selected?.gender, since:selected?.since})
        navigation.push('RiderDetails',{title1: selected?.title,multiplier1: selected?.multiplier,rating:selected?.rating, gender:selected?.gender, since:selected?.since,passengers:passengers})
    }

    return (
        <Screen style={{height:"82%"}}>
            <View style={tailwind`items-center flex-row justify-center mb-3 mt-3`}>
                <TouchableOpacity
                    style={{ left: 10, position: 'absolute', zIndex: 100 }}
                    onPress={() => navigation.push("NavigateCard2")}
                >
                    <Icon
                        type="antdesign"
                        name="arrowleft"
                        color="black"
                        size={23}
                        style={tailwind`p-3`}
                    />
                </TouchableOpacity>
                <Text style={tailwind`text-center text-xl font-bold`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <View style={[tailwind`flex-1 mt-2`]}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tailwind`flex-row items-center justify-between px-5 ${selected?.id === item.id && 'bg-gray-100'}`}
                            onPress={() => {setSelected(item)}}
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
                                    <Text style={tailwind`text-black`}>{passengers} Passengers</Text>
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
                    style={[tailwind`bg-black py-3 m-3 rounded-lg ${!selected && 'bg-gray-300'}`,{backgroundColor:"olivedrab"}]}
                    disabled={!selected}
                    onPress={onChoose}
                >
                    <Text style={tailwind`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default RideOptionsCard2

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})
