import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
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
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB"/>
        </View>
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen