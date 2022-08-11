import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center space-x-2 px-4">
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
      <View className="flex-row items-center space-x-2 pb-2 px-4 rounded">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-md">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType='default'
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100">
        <Categories />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been using these juicy discounts!"
          featuredCategory="discounts"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen