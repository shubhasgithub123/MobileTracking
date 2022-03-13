// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import SearchScreen from './src/RestaurantSearchApp/SearchScreen'

// const Stack = createStackNavigator()

// const App = () => {
//   return (
//      <NavigationContainer>
//        <Stack.Navigator>
//          <Stack.Screen name="Search" component={SearchScreen} options={{title:'Business Search'}} />
//        </Stack.Navigator>
//      </NavigationContainer>
//   )
// }

// export default App

import { View, Text } from 'react-native'
import React from 'react'
import _ from 'lodash'

const App = () => {

 

  var result  = _.chunk(['a','b','c','d','e'],10)
  console.log('result ===> ',result)

  return (
    <View>
      <Text> this is app.js</Text>
    </View>
  )
}

export default App