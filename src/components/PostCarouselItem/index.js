import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';

import styles from './styles';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const gotToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      style={[styles.container, {width: width - 60}]}
      onPress={gotToPostPage}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={post.image} />
        <View style={styles.details}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
