import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native"

const MealItem = ({ title, imageUrl, duration, complexety, affordability }) => {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => pressed ? styles.buttnPressed : null} >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image}
                            source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexety}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
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
    buttnPressed: {
        opacity: 0.5
    },


})