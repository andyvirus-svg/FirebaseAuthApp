import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { auth } from './firebase';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Validation for email, password, and other fields can be added here
    // Validate Date of Birth
    const dobDate = new Date(dob);
    const thirteenYearsAgo = new Date();
    thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);
    if (dobDate > thirteenYearsAgo) {
      setError('You must be 13 years or older to sign up.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed up successfully!');
        // Additional logic after successful signup
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (MM/DD/YYYY)"
        onChangeText={setDob}
        value={dob}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Man" value="man" />
        <Picker.Item label="Woman" value="woman" />
        <Picker.Item label="Non-Binary" value="nonbinary" />
        <Picker.Item label="Something else" value="something_else" />
        <Picker.Item label="Prefer not to say" value="prefer_not_to_say" />
      </Picker>
      <Picker
        selectedValue={role}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
      >
        <Picker.Item label="Are you a Fan or an Artist?" value="" />
        <Picker.Item label="Fan" value="fan" />
        <Picker.Item label="Artist" value="artist" />
      </Picker>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpScreen;
