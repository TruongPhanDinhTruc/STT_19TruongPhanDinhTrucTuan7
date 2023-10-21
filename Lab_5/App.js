import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable, FlatList } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function BikeShop({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>A premium online store for sporter and their stylish choice</Text>
      <View style={styles.viewBikeShop}>
        <Image source={require("./assets/bifour_-removebg-preview.png")} style={styles.imageHome}></Image>

      </View>
      <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>POWER BIKE<br/> SHOP</Text>
      <Pressable style={styles.buttonHome}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={{fontSize: 23, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: 10}}>Get Started</Text>
      </Pressable>
      
    </View>
  );
}

const DATA=[
  {
    name: 'Pinarello',
    image: require('./assets/bifour_-removebg-preview.png'),
    price: 1800,
    description: 'not nothing to show'
  },
  {
    name: 'Pinarello',
    image: require('./assets/bione-removebg-preview-1.png'),
    price: 1800,
    description: 'not nothing to show'
  },
  {
    name: 'Pinarello',
    image: require('./assets/bione-removebg-preview.png'),
    price: 1800,
    description: 'not nothing to show'
  },
  {
    name: 'Pinarello',
    image: require('./assets/bione-removebg-preview.png'),
    price: 1800,
    description: 'not nothing to show'
  },
  {
    name: 'Pinarello',
    image: require('./assets/bithree_removebg-preview-1.png'),
    price: 1800,
    description: 'not nothing to show'
  },
  {
    name: 'Pinarello',
    image: require('./assets/bitwo-removebg-preview.png'),
    price: 1800,
    description: 'not nothing to show'
  },
]

function Screen2({navigation}) {
  const [item, setItem] = React.useState();
  return (
    <View style={{}}>
      <Text style={styles.textScreen2}>The world’s Best Bike</Text>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Pressable style={styles.buttonScreen2}>
          <Text style={styles.textBtnScreen2}>ALL</Text>
        </Pressable>
        <Pressable style={styles.buttonScreen2}>
          <Text style={styles.textBtnScreen2}>Roadbike</Text>
        </Pressable>
        <Pressable style={styles.buttonScreen2}>
          <Text style={styles.textBtnScreen2}>Mountain</Text>
        </Pressable>
      </View>
      <FlatList
        data={DATA}
        numColumns = {2}
        renderItem={({item}) =>{return(
          <Pressable style={styles.viewItem}
            onPress={() => navigation.navigate('Screen3', item)}>
            <Image source={item.image} style={styles.imageItem} resizeMode = 'contain'></Image>
            <Text style={styles.nameItem}>{item.name}</Text>
            <Text style={styles.priceItem}>${item.price}</Text>
          </Pressable>
        )}}
      />
    </View>
  );
}

function Screen3({navigation, route}) {
  // const [item, setItem] = React.useState(require("./assets/bifour_-removebg-preview.png"));

  return(
    <View >
      <View style={styles.viewImage}>
        <Image source={route.params?.image} style={styles.imageScreen3}></Image>
      </View>
      <Text style={styles.textName}>{route.params?.name}</Text>
      <Text style={styles.textPrice}>15% OFF {route.params?.price}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BikeShop">
        <Stack.Screen name="BikeShop" component={BikeShop} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  )};

  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBikeShop: {
    width: 359,
    height: 388,
    borderRadius: 50,
    backgroundColor: "#E941411A",
    marginBottom: 10,
  },
  imageHome: {
    width: 292,
    height: 270,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonHome: {
    width: 340,
    height: 61,
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 30
  },
  textScreen2: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
    margin: 10,
  },
  textBtnScreen2: {
    // fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    // margin: 10,
  },
  buttonScreen2: {
    width: 100,
    height: 32,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
  },
  viewItem: {
    width: 167,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: "#E941411A",
    borderRadius: 10
  },
  imageItem: {
    width: 135,
    height: 127,
  },
  nameItem: {
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'center',
  },
  priceItem: {
    fontSize: 20,
    fontWeight: 400,
  },
  viewImage: {
    width: 359,
    height: 388,
    backgroundColor: "#E941411A",
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageScreen3: {
    width: 297,
    height: 340,
  },
  textName: {
    fontSize: 35,
    fontWeight: 400,
    // textAlign: 'center',
    margin: 10,
  },
  textPrice: {
    fontSize: 25,
    fontWeight: 400,
    margin: 10,
    color: 'lightgray'
  }
});