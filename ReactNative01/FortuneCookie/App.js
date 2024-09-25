import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import fortunes from './assets/fortunes.json'; // Importar o arquivo JSON
import closedCookie from './assets/images/closed_cookie.png'; // Imagem do biscoito fechado
import openedCookie from './assets/images/opened_cookie.png'; // Imagem do biscoito aberto

export default function App() {
  const [fortune, setFortune] = useState('');
  const [cookieOpen, setCookieOpen] = useState(false);

  // Função para quebrar o biscoito
  const breakCookie = () => {
    setCookieOpen(true);
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={cookieOpen ? openedCookie : closedCookie}
        style={styles.cookieImage}
      />
      {cookieOpen && <Text style={styles.fortuneText}>{fortune}</Text>}
      <Button title="Quebrar Biscoito" onPress={breakCookie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
