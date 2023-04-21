import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {useFonts} from 'expo-font';
import {SizeConstants, ColorConstants, FontConstants} from './GlobalStyles';
import Icon from './weatherIcon';
// import data from './data';
import WeatherDetail from './components/WeatherDetail';
import WeatherHourly from './components/WeatherHourly';
import WeatherSummary from './components/WeatherSummary';
import { Hour } from './components/Hour';
import  WeatherDaily  from './components/WeatherDaily';
import Sun from './components/Sun';
import axios from 'axios';
import {WEATHER_API} from '@env';
import Radar from './components/Radar';




export default function App() {

  const [data, setData] = useState(null);

  useEffect(()=> {
    
    axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=38.419&lon=-82.445&units=imperial&appid='+WEATHER_API).then((response)=> {
    console.log(response)
    setData(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })



  },[]);


const [loaded] = useFonts(
  {icomoon: require('./assets/fonts/icomoon.ttf')}
);

if(!loaded){
  return null;
}

if (!data){
  return null;
}

  return (
    <ScrollView style={styles.container}>
      
      <WeatherSummary data={data}/>
    
    
    <WeatherDetail data = {data} />
    
    
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
      <WeatherHourly data = {data} />

      <WeatherDaily data = {data}/>

      <Sun Sun = {data.daily[0]} />

      <Radar/>
      
      
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
