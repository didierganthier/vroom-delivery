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
          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon className="w-5 h-5" />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen