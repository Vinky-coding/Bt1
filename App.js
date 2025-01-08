import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
      
      </Text>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={{fontSize: 20 , fontWeight: 'bold'}} >Nhập số điện thoại</Text>
      <Text>

      </Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={() => alert('Tiếp tục')}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 8,
    
    // backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});