import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuCardContainer: {
    flex: 1,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20
  },
  menuTitleContainer: {
    
  },
  menuCardPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  menuCardName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  menuCardInfo: {
    padding: 10
  },
  menuButton: {
    margin:2,
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  menuButtonGroup:{
    marginTop: 10,
    flexDirection: 'row'
  }
});

export default styles;
