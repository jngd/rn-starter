import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
