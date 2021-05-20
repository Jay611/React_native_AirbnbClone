import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';

const PostScreen = props => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  return (
    <View>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
