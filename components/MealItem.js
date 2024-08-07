import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native"

import { useNavigation } from "@react-navigation/native"

import MealDetails from "./MealDetails"
const MealItem = ({ id, title, imageUrl, duration, complexety, affordability }) => {

    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', { mealId: id })
    }



    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler} android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.buttnPressed : null} >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image}
                            source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexety={complexety} affordability={affordability} />
                </View>
            </Pressable>

        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8

    },

    buttnPressed: {
        opacity: 0.5
    },


})