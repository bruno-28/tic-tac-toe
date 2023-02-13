import { View, Pressable, Text, StyleSheet } from "react-native";
import Square from "./Square";

const Board = ({ turns, checkTurn }) => {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.board}>
        <View style={styles.row}>
          <Square squareId={0} squareValue={turns[0]} setTurn={checkTurn} />
          <Square squareId={1} squareValue={turns[1]} setTurn={checkTurn} />
          <Square squareId={2} squareValue={turns[2]} setTurn={checkTurn} />
        </View>
        <View style={styles.row}>
          <Square squareId={3} squareValue={turns[3]} setTurn={checkTurn} />
          <Square squareId={4} squareValue={turns[4]} setTurn={checkTurn} />
          <Square squareId={5} squareValue={turns[5]} setTurn={checkTurn} />
        </View>
        <View style={styles.row}>
          <Square squareId={6} squareValue={turns[6]} setTurn={checkTurn} />
          <Square squareId={7} squareValue={turns[7]} setTurn={checkTurn} />
          <Square squareId={8} squareValue={turns[8]} setTurn={checkTurn} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  board: {},
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Board;
