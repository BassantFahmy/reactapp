import React from 'react';
import { Modal, Text, Button, Image, View, StyleSheet } from 'react-native';
const PlaceDetail = props => {

    let modalContent = null
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
        )
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide-down">
            <View style={styles.modalContent}>
                {modalContent}
                <View>
                    <Button title="delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="close" onPress={props.onModalClosed}></Button>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage:{
        width:"100%",
        height:200
    },
    placeName:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    }
})
export default PlaceDetail;
