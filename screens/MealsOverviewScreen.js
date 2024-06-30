import { View, StyleSheet, FlatList, Text } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';


const MealsOverviewScreen = ({ route }) => {

    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = (itemData) => {

        const item = itemData.item
        const mealItemProps = {
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