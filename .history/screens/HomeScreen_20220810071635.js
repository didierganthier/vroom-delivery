import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search Bar */}
        <View className="">
          <View className="flex-row space-x-2 bg-gray-200 p-3">
            <SearchIcon color={gray} size={20}/>
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType='default'
            />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen