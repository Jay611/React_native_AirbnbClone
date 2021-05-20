import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, Image, Pressable} from 'react-native';

import styles from './styles';

const days = 7;

const Post = props => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
      <Image style={styles.image} source={{uri: post.image}} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;
