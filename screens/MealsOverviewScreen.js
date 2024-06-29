import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data';


const MealsOverviewScreen = () => {

    return (
        <View styles={styles.container} >
            <Text>
                Meals Overview Screen
            </Text>
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