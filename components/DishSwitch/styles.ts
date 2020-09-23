import { StyleSheet, Dimensions } from 'react-native';
import {SCREEN_WIDTH} from '../../constants/constants';

let switchContainerWidth = SCREEN_WIDTH-10;
let switchContainerHeight = SCREEN_WIDTH/10;

const styles = StyleSheet.create({

  switchContainer: {
    flex: 1,
    width: switchContainerWidth,
    height: switchContainerHeight,
    margin:5,
    // borderColor: '#cccccc',
    // borderWidth: 0.5,
    // borderRadius: 5,
    padding: 5,
  },

  switchGroup: {
    flexDirection: 'row',
    height: '100%',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 5
  },

  switchButton: {
    position: 'absolute',
    width: switchContainerWidth-(switchContainerHeight+10),
    height: '100%',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#2cd18a',




    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },

  switchInfo: {
    position: 'absolute',
    width: switchContainerHeight,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    backgroundColor: 'transparent',
borderColor: 'white',
overflow: 'hidden',
shadowColor: 'black',
shadowRadius: 10,
shadowOpacity: 1,
  },













  container: {
    backgroundColor: 'white',
    flex: 1
  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    margin: 15
  },
  dishName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});

export default styles;
