import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Kiểm tra tính hợp lệ của số điện thoại
  const isValidPhoneNumber = phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với tiêu đề "Đăng nhập" */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      {/* Container cho phần đăng nhập */}
      <View style={styles.loginContainer}>
        <Text style={styles.subtitle}>
          Nhập số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        {/* Ô nhập số điện thoại */}
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          maxLength={10}
        />

        {/* Nút "Tiếp tục" */}
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isValidPhoneNumber ? '#34C759' : '#E0E0E0'}, // Thay đổi màu nút
          ]}
          disabled={!isValidPhoneNumber} // Vô hiệu hóa khi số điện thoại không hợp lệ
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Tạo đổ bóng cho phần header
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  loginContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
