/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {
  Animated,
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Stack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const ProfileTab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90EE90',
      }}>
      <ImageBackground
        source={require('./leafbg.png')}
        resizeMode="contain"
        style={{
          // shadowColor: '#000',
          // shadowOffset: {width: -2, height: 4},
          // shadowOpacity: 0.2,
          // shadowRadius: 3,
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 150,
          backgroundColor: 'transparent',
        }}
      />
    </SafeAreaView>
  );
};

const Bye = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>BYEEEEEEE</Text>
    </SafeAreaView>
  );
};

const View1 = styled.View`
  background-color: black;
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;
const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#90EE90',
      }}>
      <View1
        style={{
          position: 'relative',
          top: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: '-50%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150%',
          }}>
          <TextInput
            multiline
            maxLength={70}
            placeholder="Tap here to add your bio"
            placeholderTextColor={'black'}
            textAlign="center"
            style={{
              height: 50,
              margin: 12,
              padding: 0,
              // backgroundColor: 'blue',
            }}
            color={'green'}></TextInput>
        </View>
      </View1>
      <View
        style={{
          position: 'relative',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
          height: 25,
          width: '90%',
          top: '35%',
        }}>
        <Text style={{color: '#228b22', fontWeight: 'bold', fontSize: 20}}>
          Posts
        </Text>
        <Text style={{color: '#228b22', fontWeight: 'bold', fontSize: 20}}>
          Friends
        </Text>
      </View>
      <View
        style={{
          position: 'relative',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
          height: 35,
          width: '90%',
          // backgroundColor: 'aliceblue',
          top: '35%',
        }}>
        <Button title="5"></Button>
        <Button title="100"></Button>
      </View>
      {/* make activity its own component */}
      <View
        style={{
          position: 'relative',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
          height: 30,
          width: '90%',
          backgroundColor: 'aliceblue',
          top: '40%',
        }}>
        {/* <Activity /> */}
        <Button title="Activity"></Button>
        <Button title="Activity"></Button>
        <Button title="Activity"></Button>
      </View>
    </SafeAreaView>
  );
};

const Activity = () => {
  return null;
};

const Camera1 = () => {
  const [perm, setPerm] = useState(false);
  // const getPerms = async function () {
  //   try {
  //     const newCameraPermission = await Camera.requestCameraPermission();
  //     const cameraPermission = await Camera.getCameraPermissionStatus();
  //     console.log('## cameraPermission ', cameraPermission);
  //     console.log('## newCameraPermission ', newCameraPermission);

  //     return cameraPermission;
  //   } catch {
  //     cameraPermission = null;
  //     return cameraPermission;
  //   }
  // };

  useEffect(() => {
    Camera.requestCameraPermission().then(status => {
      console.log('## status ', status);

      if (status === 'authorized') {
        setPerm(true);
      }
    });
  }, []);
  const available = Camera.getAvailableCameraDevices();
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  console.log('## available ', available);

  console.log('## device ', device);
  console.log('## perm ', perm);
  //hi
  if (device == null || !perm) {
    return null;
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </View>
    );
  }
};

const Hi = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HIIIIIIII</Text>
    </SafeAreaView>
  );
};
const App = () => {
  const [animate, setAnimate] = useState(new Animated.Value(0));
  const [screen, setScreen] = useState('A');

  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
            // height: '10%',
            left: 0,
            right: 0,
            // borderRadius: 15,
            bottom: 0,
            shadowColor: '#000',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          headerShown: false,
        }}>
        <MainTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('./home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#228b22' : '#A9A9A9',
                  }}
                />
              </View>
            ),
          }}
        />
        <MainTab.Screen
          name="Bye"
          component={Bye}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('./can.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#228b22' : '#A9A9A9',
                  }}
                />
              </View>
            ),
          }}
        />
        <MainTab.Screen
          name="Hi"
          component={Hi}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('./location.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#228b22' : '#A9A9A9',
                  }}
                />
              </View>
            ),
          }}
        />
        <MainTab.Screen
          name="Camera1"
          component={Camera1}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('./camera.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#228b22' : '#A9A9A9',
                  }}
                />
              </View>
            ),
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('./user.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#228b22' : '#A9A9A9',
                  }}
                />
              </View>
            ),
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  );
};

export default App;

// NavigationContainer>
//   <Stack.Navigator initialRouteName="Home">
//     {/* <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#90EE90',
//       }}>
//       <ImageBackground
//         source={require('./leafbg.png')}
//         resizeMode="contain"
//         style={{
//           shadowColor: '#000',
//           shadowOffset: {width: -2, height: 4},
//           shadowOpacity: 0.2,
//           shadowRadius: 3,
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: 150,
//           height: 150,
//           backgroundColor: 'transparent',
//         }} */}
//     {/* /> */}
//     {/* <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Bye" component={Bye} /> */}

//     {/* </SafeAreaView> */}
//   {/* </Stack.Navigator>
// </NavigationContainer> */}

{
  /* <a target="_blank" href="https://icons8.com/icon/2797/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
  // <a target="_blank" href="https://icons8.com/icon/59749/camera">Camera</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  // <a target="_blank" href="https://icons8.com/icon/7880/location">Location</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  // <a target="_blank" href="https://icons8.com/icon/8946/user-account">User Account</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
}
