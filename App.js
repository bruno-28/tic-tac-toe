import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Board from "./components/Board";
import NewGameModal from "./components/NewGameModal";

export default function App() {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [winner, setWinner] = useState("");

  const [turns, setTurns] = useState({});

  const newGame = () => {
    setTurns({});
    setIsGameFinished(false);
    setIsModalVisible(false);
    setIsPlayer1Turn(true);
  };

  const finishGame = () => {
    setIsGameFinished(!isGameFinished);
    setIsModalVisible(!isModalVisible);
  };

  const checkWinner = () => {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < winnerCombinations.length; index++) {
      const [a, b, c] = winnerCombinations[index];
      if (
        turns[a] === turns[b] &&
        turns[b] === turns[c] &&
        a in turns &&
        b in turns &&
        c in turns
      ) {
        //Winner is determined
        setWinner(
          isPlayer1Turn
            ? "Congratulations Player 1!"
            : "Congratulations Player 2!"
        );
        finishGame();
      }
    }

    //if board is full but there is no winner
    if (Object.keys(turns).length === 9) {
      setWinner("It's a Tie!");
      finishGame();
    }
  };

  const checkTurn = (value) => {
    const tempTurns = turns;
    tempTurns[value] = isPlayer1Turn ? "X" : "O";

    //updating turns
    setTurns({ ...tempTurns });

    //checking if there is a winner and/or updating player
    checkWinner();
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tic Tac Toe</Text>
        </View>
        <View style={styles.boardContainer}>
          {!isGameFinished && <Board turns={turns} checkTurn={checkTurn} />}
        </View>
        <NewGameModal
          isVisible={isModalVisible}
          winner={winner}
          newGame={newGame}
        />
        <View style={styles.playerInfoContainer}>
          <Text style={styles.playerInfoText}>X - Player 1</Text>
          <Text style={styles.playerInfoText}>O - Player 2</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23272f",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  boardContainer: {
    flex: 3,
    justifyContent: "center",
  },
  playerInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  playerInfoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
