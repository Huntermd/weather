import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {useFonts} from 'expo-font';
import {SizeConstants, ColorConstants, FontConstants} from './GlobalStyles';
import Icon from './weatherIcon';
import data from './data';
import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';
import { Hour } from './components/Hour';





export default function App() {


const [loaded] = useFonts(
  {icomoon: require('./assets/fonts/icomoon.ttf')}
);

if(!loaded){
  return null;
}

  return (
    <ScrollView style={styles.container}>
      
      <WeatherSummary/>
    
    
    <WeatherDetail />
    
    
   {/* <FlatList
    horizontal
    data ={data.hourly}
    renderItem= {({item}) => <Hour hour={item}/>}
    keyExtractor={(item, index) => index}
    />*/}
    {/*
      data.hourly.map((hour) => {
        return <Hour pop={hour.pop} />;
      })*/
    }
      <WeatherHourly />
      
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.backgroundDark,
    

  },
  text:{
    color: ColorConstants.normal,
    fontSize: 50,
    marginTop: 10
    
  },
  icon:{
    color: 'orange',
   
    
  },
 
  iconContain:{
    width: '30%',
    height: '20%',
    backgroundColor: '#454545',
    borderWidth: 4,
    borderRadius: 20 ,
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
    
    
  }
});
