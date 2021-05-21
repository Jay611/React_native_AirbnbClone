import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';

const GuestsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.location}>{route.params.formatted_address}</Text>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </View>
        <View>
          {/* adults */}
          <View style={styles.row}>
            <View>
              <Text style={styles.type}>Adults</Text>
              <Text style={styles.description}>Ages 13 or above</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setAdults(Math.max(0, adults - 1))}>
                <Text style={styles.buttonText}>-</Text>
              </Pressable>

              <Text style={styles.value}>{adults}</Text>

              <Pressable
                style={styles.button}
                onPress={() => setAdults(adults + 1)}>
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
          </View>

          {/* children */}
          <View style={styles.row}>
            <View>
              <Text style={styles.type}>Children</Text>
              <Text style={styles.description}>Ages 2 - 12</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setChildren(Math.max(0, children - 1))}>
                <Text style={styles.buttonText}>-</Text>
              </Pressable>

              <Text style={styles.value}>{children}</Text>

              <Pressable
                style={styles.button}
                onPress={() => setChildren(children + 1)}>
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
          </View>

          {/* infants */}
          <View style={styles.row}>
            <View>
              <Text style={styles.type}>Infants</Text>
              <Text style={styles.description}>Under 2</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setInfants(Math.max(0, infants - 1))}>
                <Text style={styles.buttonText}>-</Text>
              </Pressable>

              <Text style={styles.value}>{infants}</Text>

              <Pressable
                style={styles.button}
                onPress={() => setInfants(infants + 1)}>
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <Pressable
        style={styles.searchButton}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
              params: {
                guests: adults + children,
                viewport: route.params.viewport,
              },
            },
          })
        }>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
