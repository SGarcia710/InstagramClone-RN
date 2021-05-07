import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import Post from '../../components/Post';

const POSTS_DATA = [
  {
    user: {
      userName: 'joshua_l',
      avatar: require('../../assets/images/ProfilePhoto.png'),
      isVerified: true,
    },
    location: 'Tokyo, Japan',
    media: [{url: require('../../assets/images/PostPhoto.png'), type: 'image'}],
    description:
      'The game in Japan was amazing and I want to share some photos',
  },
  {
    user: {
      userName: 'luisa',
      avatar: require('../../assets/images/ProfilePhoto.png'),
      isVerified: false,
    },
    location: 'Tokyo, Japan',
    media: [{url: require('../../assets/images/PostPhoto.png'), type: 'image'}],
    description:
      'The game in Japan was amazing and I want to share some photos',
  },
  {
    user: {
      userName: 'sebastian',
      avatar: require('../../assets/images/ProfilePhoto.png'),
      isVerified: true,
    },
    location: 'Tokyo, Japan',
    media: [{url: require('../../assets/images/PostPhoto.png'), type: 'image'}],
    description:
      'The game in Japan was amazing and I want to share some photos',
  },
];

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/icons/CameraIcon.png')} />
        <Image
          source={require('../../assets/images/InstagramHeaderLogo.png')}
        />
        <View style={styles.headerRightOptions}>
          <Image
            style={{
              marginRight: 18.31,
            }}
            source={require('../../assets/icons/IGTVIcon.png')}
          />
          <Image source={require('../../assets/icons/ChatsIcon.png')} />
        </View>
      </View>
      {React.Children.toArray(POSTS_DATA.map(post => <Post {...post} />))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  headerContainer: {
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.4)',
  },
  headerRightOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
