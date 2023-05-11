import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { Header, Button } from "react-native-elements";
import { ContainerRP } from './ReportStyle';
import { ButtonTextHome, ButtonVerify } from '../../components/styles';
const ReportPage = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
  }
  return (
    <View>
      <Header
        leftComponent={
          <Button
            onPress={() => {
              nav.navigate('Confirm');
            }}
            icon={
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            }
          />
        }
        centerComponent={{
          text: "Khiếu nại",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
      />

      <ContainerRP>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nhập tiêu đề"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.label}>Nội dung</Text>
          <TextInput
            style={styles.inputContent}
            placeholder="Nhập nội dung"
            value={content}
            onChangeText={text => setContent(text)}
            multiline
          />
          <Text style={styles.label}>Ảnh kèm theo</Text>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => console.log('Chọn ảnh')}
          >
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>Chọn ảnh kèm theo</Text>
            )}
          </TouchableOpacity>
      
          <ButtonVerify onPress={handleSubmit}
            >
              <ButtonTextHome>Gửi báo cáo</ButtonTextHome>
            </ButtonVerify>
        </View>
      </ContainerRP>


    </View>
  )
}

export default ReportPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  inputContent: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  imagePlaceholder: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ccc',
  },
  buttonReport: {
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});