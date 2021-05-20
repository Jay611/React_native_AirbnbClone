import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginTop: 15,
    marginLeft: 25,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  title: {
    marginLeft: 25,
    width: '70%',
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  searchButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    elevation: 100,
    width: '90%',
    height: 60,
    borderRadius: 30,
  },
  searchButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
