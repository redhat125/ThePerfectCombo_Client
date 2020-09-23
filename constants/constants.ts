import { Dimensions, Animated } from "react-native";

//----------------------
//demo data related
//----------------------
export const TEST_DATA_CONST = {
    FETCHING_DATA : 'FETCHING_DATA',
    FETCHING_DATA_SUCCESS : 'FETCHING_DATA_SUCCESS',
    FETCHING_DATA_FAILURE : 'FETCHING_DATA_FAILURE'
}

//----------------------
//location related
//----------------------
export const LOCATION_DELTA = {
    latitudeDelta: 0.01864195044303443,
    longitudeDelta: 0.010142817690068
}

//----------------------
//vendor related
//----------------------
export const VENDOR_CONST = {
    FETCHING_VENDOR_LIST : 'FETCHING_VENDOR_LIST',
    FETCHING_VENDOR_LIST_SUCCESS : 'FETCHING_VENDOR_LIST_SUCCESS',
    FETCHING_VENDOR_LIST_FAILURE : 'FETCHING_VENDOR_LIST_FAILURE'
}

//----------------------
//vendor filter related
//----------------------
export const VENDOR_FILTER_CONST = {
    FILTERING_VENDOR_LIST : 'FILTERING_VENDOR_LIST',
    FILTERING_VENDOR_LIST_SUCCESS : 'FILTERING_VENDOR_LIST_SUCCESS',
    FILTERING_VENDOR_LIST_FAILURE : 'FILTERING_VENDOR_LIST_FAILURE'
}



export const SCREEN_INFO = {
    HEIGHT : Dimensions.get("window").height,
    WIDTH :  Dimensions.get("window").width,
    CARD_HEIGHT : (Dimensions.get("window").height / 4),
    CARD_WIDTH : (Dimensions.get("window").width - 30)
}

const socketEndpoint = "http://localhost:8080/gs-guide-websocket"; //"https://a34cce5aaec0.ngrok.io";//"https://socket-io-expo-backend-dtyxsdtzxb.now.sh";

// export class GlobalVars{
//     static MapAnimation = new Animated.Value(0);
//     static animatedMarker = [];
//     static currentMarkerIndex = 0;
//     static mapRef;
//     static cardScrollRef;
//     static webSocketEndpoint = socketEndpoint;
//     static socket;
// }


// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
export const SCREEN_WIDTH = width < height ? width : height;
export const SCREEN_HEIGHT = height < width ? height : width;

export const Global_Types = {
    menuTypeId : '',
    dishesTypeId : '',
    orderDishId : ''
}

