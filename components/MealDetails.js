import { View, Text, StyleSheet } from 'react-native'

const MealDetails = ({ duration, complexety, affordability }) => {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexety}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
})