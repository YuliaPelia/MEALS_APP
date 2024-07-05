
import { View, Text, StyleSheet } from 'react-native'
const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})