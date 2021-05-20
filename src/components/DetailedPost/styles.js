import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bedrooms: {
    marginVertical: 10,
    color: '#565656',
  },
  container: {
    margin: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#565656',
    textDecorationLine: 'line-through',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  totalPrice: {
    color: '#565656',
    textDecorationLine: 'underline',
  },
});

export default styles;
