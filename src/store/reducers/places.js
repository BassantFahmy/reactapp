import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";
const initialState = {
    places: [],
    selectedPlace: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    value: action.placeName,
                    image: { uri: "https://res.cloudinary.com/teepublic/image/private/s--tEbEtjkr--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-215,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-326,y_-215/b_rgb:c62b29/c_limit,f_jpg,h_630,q_90,w_630/v1564674624/production/designs/5480849_0.jpg" }
                })
            }
        case DELETE_PLACE:
            return {
                ...state.key,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: prevState.places.find(place => {
                    return place.key === action.placekey;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}
export default reducer;