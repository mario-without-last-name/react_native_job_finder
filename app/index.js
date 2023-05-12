import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } 
from '../components';

import { RAPID_API_KEY } from '@env';
const rapidApiKey = RAPID_API_KEY;
// const rapidApiKey = process.env.RAPID_API_KEY;

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle:{backgroundColor:COLORS.lightWhite}, 
          headerShadowVisible:false, 
          headerLeft:()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            // <ScreenHeaderBtn iconUrl="menu.png" dimension="60%"/>
          ),
          headerRight:()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          ),
          headerTitle: ""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs/>
          <Text>The env content is: {rapidApiKey}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;