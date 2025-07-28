import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  Linking,
  ActivityIndicator,
} from 'react-native';

const fallbackImage = require('@/assets/images/default_user.png');

function getImageSource(imageUrl: string | undefined) {
  if (!imageUrl) return fallbackImage;
  // Check if it's a Google Drive link
  const match = imageUrl.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (match) {
    return { uri: `https://drive.google.com/uc?export=view&id=${match[1]}` };
  }
  return { uri: imageUrl };
}

export default function ContributorCard({ item }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageSource =
    imageError || !item.image ? fallbackImage : getImageSource(item.image);

  const openLinkedIn = async () => {
    const fullLink = item.linkedin.startsWith('http')
      ? item.linkedin
      : `https://${item.linkedin}`;
    try {
      const supported = await Linking.canOpenURL(fullLink);
      if (supported) {
        await Linking.openURL(fullLink);
      } else {
        Alert.alert('Invalid URL', 'Unable to open this link.');
      }
    } catch (err) {
      Alert.alert('Error', 'Something went wrong while trying to open the link.');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {isLoading && (
          <ActivityIndicator
            style={StyleSheet.absoluteFill}
            size="small"
            color="#F7931E"
          />
        )}
        <Image
          source={imageSource}
          style={styles.image}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
      <Text style={styles.name} numberOfLines={4}>{item.name}</Text>
      <Text style={styles.roll} numberOfLines={4}>{item.roll}</Text>
      <Text style={styles.email} numberOfLines={4}>{item.gmail}</Text>
      <Text style={styles.link} numberOfLines={1} onPress={openLinkedIn}>
        LinkedIn
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    textAlign: 'center',
  },
  roll: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },
  link: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#1a0dab',
    marginTop: 4,
    textAlign: 'center',
  },
});
