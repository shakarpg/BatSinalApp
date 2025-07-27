
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    localizacao: '',
    observacao: ''
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSend = () => {
    console.log('Dados enviados:', formData);
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <>
          <Image source={require('./assets/bat-logo.png')} style={styles.logo} />
          <Button title="Activate Bat Signal" onPress={() => setShowForm(true)} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(value) => handleChange('nome', value)}
          />
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            onChangeText={(value) => handleChange('telefone', value)}
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Localização atual:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua localização"
            onChangeText={(value) => handleChange('localizacao', value)}
          />
          <Text style={styles.label}>Observações:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite observações"
            multiline
            numberOfLines={3}
            onChangeText={(value) => handleChange('observacao', value)}
          />
          <Button title="Enviar" onPress={handleSend} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  logo: { width: 150, height: 150, alignSelf: 'center', marginBottom: 20 },
  label: { marginTop: 10, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 10
  }
});
