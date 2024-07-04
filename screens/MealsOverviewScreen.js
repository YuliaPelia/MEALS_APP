import { View, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';
import  CATEGORIES  from '../data/dummy-data';


const MealsOverviewScreen = ({ route, navigation }) => {

    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
        navigation.setOptions({     
            title: categoryTitle
        })
    }, [categoryId, navigation])


    const renderMealItem = (itemData) => {

        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability

        }
        return <MealItem {...mealItemProps} />

    }
    return (
        <View styles={styles.container} >
   
            <FlatList data={displayedMeals} keyExtractor={(meal) => meal.id} renderItem={renderMealItem}></FlatList>
        </View>
    )

}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})