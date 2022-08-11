import { View, Text } from 'react-native'
import React from 'react'

const FeaturedRow = ({ title, description, featuredCategory }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between">
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

export default FeaturedRow