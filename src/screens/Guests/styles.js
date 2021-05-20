import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#474747',
  },
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 16,
    color: '#474747',
  },
  description: {
    color: '#8d8d8d',
  },
  infoContainer: {
    alignItems: 'center',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  searchButton: {
    backgroundColor: '#f15454',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  type: {
    fontWeight: 'bold',
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
