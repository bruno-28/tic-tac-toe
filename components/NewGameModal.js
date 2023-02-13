import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

const NewGameModal = ({ isVisible, winner, newGame }) => {
  return (
    <Modal animationType={"slide"} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.text}>{winner}</Text>
          <Pressable style={styles.button} onPress={newGame}>
            <Text style={styles.buttonText}>Start a new game</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23272f",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    padding: 6,
  },
  button: {
    backgroundColor: "#23272f",
    padding: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});

export default NewGameModal;
