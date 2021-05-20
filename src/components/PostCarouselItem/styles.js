import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bedrooms: {
    marginVertical: 10,
    color: '#565656',
  },
  container: {
    height: 130,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  description: {
    fontSize: 14,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  newPrice: {
    color: 'black',
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#565656',
    textDecorationLine: 'line-through',
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  totalPrice: {
    color: '#565656',
    textDecorationLine: 'underline',
  },
});

export default styles;
