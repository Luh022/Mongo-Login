import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DB_User = process.env.DB_User;
const DB_Password = process.env.DB_Password;
const apiPort = process.env.PORT || 8000;

<link rel="stylesheet" href="exp://192.168.1.195:19001"/>

mongoose
  .connect(
    process.env.MONGODB_URL, { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(apiPort, function () {
      console.log(`Server running on port ${apiPort}`);
    });
  }) 