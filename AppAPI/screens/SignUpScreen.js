import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foto, setFoto] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [cpf, setCpf] = useState('');
  const [salario, setSalario] = useState('');
  const [formacao, setFormacao] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:3006/api/auth/cadastrar', {
        nome: name, 
        email: email,
        senha: password,
        nivel: 'Professor',
        foto: foto,
        dataNasc: dataNasc,
        cpf: cpf,
        salario: salario,
        formacao: formacao
      });
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Foto"
        value={foto}
        onChangeText={setFoto}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (mm/dd/aa)"
        value={dataNasc}
        onChangeText={setDataNasc}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <TextInput
        style={styles.input}
        placeholder="Salário"
        value={salario}
        onChangeText={setSalario}
      />

      <TextInput
        style={styles.input}
        placeholder="Formação"
        value={formacao}
        onChangeText={setFormacao}
      />

      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
