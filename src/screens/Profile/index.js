import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };

  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={logout}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#ff9900',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
