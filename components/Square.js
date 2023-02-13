import { Pressable, Text, StyleSheet } from "react-native";

const Square = ({ squareId, squareValue, setTurn }) => {
  return (
    <Pressable
      style={styles.square}
      android_ripple={{ color: "#23272f", radius: 40}}
      onPress={() => setTurn(squareId)}
      disabled={squareValue ? true : false}
    >
      <Text style={styles.squareText}>{squareValue}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  square: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    marginVertical: 6,
    marginHorizontal: 6,
    backgroundColor: "white",
  },
  squareText: {
    fontSize: 40,
    fontWeight: "bold",
  }
});

export default Square;
