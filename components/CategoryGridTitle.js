import { Pressable, View, Text, StyleSheet } from "react-native";




const CategoryGridTitle = ({ title, color }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default CategoryGridTitle;