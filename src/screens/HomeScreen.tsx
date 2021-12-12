import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, View } from 'react-native'

export const HomeScreen = () => {
	return (
		<View>
			<Text>Hola mundo</Text>
			<Text>
				<Icon name='airplane-outline' size={50} color='#000' />
			</Text>
		</View>
	)
}
