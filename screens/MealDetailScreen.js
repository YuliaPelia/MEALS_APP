import { useLayoutEffect } from "react"

import { Text, View, Image, StyleSheet,ScrollView } from "react-native"
import { MEALS } from "@/data/dummy-data"
import MealDetails from "@/components/MealDetails"
import Subtitle from "@/components/MealDetail/Subtitle"
import List from "@/components/MealDetail/List"
import IconButton from "@/components/IconButton"
const MealDetailScreen = ({ route, navigation }) => {

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const headerBtnPressHandler = () => {
        console.log('Pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerRight: () => {
                return <IconButton onPress={headerBtnPressHandler} icon={'star'} color={'white'} />
            }
         })
    }, [navigation, headerBtnPressHandler])

    return <ScrollView style={styles.rootContainer}>

            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title} >{selectedMeal.title}</Text>

            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />

                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>

    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8,
        color: '#e2b497'
    },
    detailText: {
        color: '#e2b497'
    },


    listContainer: {
        width: '80%',
        marginHorizontal: 'auto'
    }
})