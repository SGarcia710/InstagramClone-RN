import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: 4,
    fontWeight: 'bold',
    fontSize: 13,
  },
  location: {
    fontSize: 11,
  },
  optionsButton: {},
  media: {
    width: '100%',
  },
  mediaItem: {
    width: '100%',
    resizeMode: 'cover',
  },
  mainContent: {
    paddingTop: 13.5,
    paddingHorizontal: 14,
  },
  actionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13.5,
  },
  mainActions: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  likesText: {
    marginLeft: 6.5,
    fontSize: 13,
  },
  boldText: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: 4,
  },
  description: {},
  descriptionUserName: {
    fontWeight: 'bold',
  },
  age: {
    fontSize: 12,
    color: 'gray',
  },
});

const ACTIONS = [
  {
    icon: require('../assets/icons/LikeIcon.png'),
  },
  {
    icon: require('../assets/icons/CommentsIcon.png'),
  },
  {
    icon: require('../assets/icons/ShareIcon.png'),
  },
  {
    icon: require('../assets/icons/BookmarkIcon.png'),
  },
];

const Post = ({
  user: {userName, avatar, isVerified},
  location,
  media,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} />
        <View style={styles.info}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{userName}</Text>
            {isVerified && (
              <Image source={require('../assets/icons/VerifiedIcon.png')} />
            )}
          </View>
          <Text style={styles.location}>{location}</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.optionsButton}
            source={require('../assets/icons/OptionsIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.media}>
        <Image style={styles.mediaItem} source={media[0].url} />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.actionsBar}>
          <View style={styles.mainActions}>
            {React.Children.toArray(
              ACTIONS.slice(0, 3).map((action, index) => (
                <TouchableOpacity
                  style={{
                    marginRight: index === 2 ? 0 : 17,
                  }}>
                  <Image source={action.icon} />
                </TouchableOpacity>
              )),
            )}
          </View>
          <Image source={ACTIONS[3].icon} />
        </View>
        <View style={styles.likesContainer}>
          <Image source={require('../assets/images/LikePhoto.png')} />
          <Text style={styles.likesText}>
            Liked by <Text style={styles.boldText}>craig_love</Text> and{' '}
            <Text style={styles.boldText}>44,686 </Text>others
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            <Text style={styles.descriptionUserName}>{userName} </Text>
            {description}
          </Text>
        </View>
        <Text style={styles.age}>16 days ago</Text>
      </View>
    </View>
  );
};

export default Post;
