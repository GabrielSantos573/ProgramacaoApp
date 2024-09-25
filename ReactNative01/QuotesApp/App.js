import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import quotes from './assets/quotes.json'; // Importar o arquivo JSON

// Importar as imagens diretamente
import gojoImage from './assets/images/gojo.jpg';
import itadoriImage from './assets/images/itadori.jpg';
import megumiImage from './assets/images/megumi.jpg';
import nanamiImage from './assets/images/nanami.jpg';
import nobaraImage from './assets/images/nobara.jpg';
import tojiImage from './assets/images/toji.jpg';
import yuutaImage from './assets/images/yuuta.jpg';

const images = {
  'Satoru Gojo': gojoImage,
  'Yuuta Okkotsu': yuutaImage,
  'Megumi Fushiguro': megumiImage,
  'Nobara Kugisaki': nobaraImage,
  'Itadori Yuji': itadoriImage,
  'Toji Fushiguro': tojiImage,
  'Nanami': nanamiImage,
};

export default function App() {
  const [quote, setQuote] = useState(quotes[0]); // Estado inicial com a primeira citação

  // Função para obter uma citação aleatória
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"{quote.quote}"</Text>
      <Text style={styles.author}>- {quote.author}</Text>
      <Image source={images[quote.author]} style={styles.image} />
      <Button title="Nova Citação" onPress={getRandomQuote} />
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
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  author: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  }
});
