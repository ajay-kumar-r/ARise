import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Linking,
  ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { contributorsData } from '../../src/data/contributorsData';

const fallbackImage = require('@/assets/images/default_user.png');

const teamOptions = [
  { label: 'Project Leads', value: 'projectLeads' },
  { label: '3D Team', value: 'team3D' },
  { label: 'AR Team', value: 'teamAR' },
  { label: 'Authoring Team', value: 'teamAuthoring' },
  { label: 'E-Contents Team', value: 'teamEContent' },
];

const ContributorCard = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const imageSource =
    imageError || !item.image ? fallbackImage : { uri: item.image };

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
      <Image
        source={imageSource}
        style={styles.image}
        onError={() => setImageError(true)}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.roll}>{item.roll}</Text>
      <Text style={styles.email}>{item.gmail}</Text>
      <Text style={styles.link} onPress={openLinkedIn}>
        {item.linkedin}
      </Text>
    </View>
  );
};

const SectionHeader = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

export default function LeadsScreen() {
  const [selectedTeam, setSelectedTeam] = useState('projectLeads');
  const isProjectLeads = selectedTeam === 'projectLeads';
  const teamData = contributorsData[selectedTeam] || [];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Dropdown
            style={styles.dropdown}
            data={teamOptions}
            labelField="label"
            valueField="value"
            value={selectedTeam}
            onChange={(item) => setSelectedTeam(item.value)}
            placeholder="Select Team"
            placeholderStyle={styles.dropdownText}
            selectedTextStyle={styles.dropdownText}
            renderItem={(item, selected) => (
              <View style={styles.dropdownItem}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    selected && styles.dropdownItemTextSelected,
                  ]}
                >
                  {item.label}
                </Text>
              </View>
            )}
          />
        </View>

        <View style={styles.bottomContainer}>
          {isProjectLeads ? (
            <FlatList
              data={teamData}
              keyExtractor={(item, index) => `${item.name}-${index}`}
              renderItem={({ item }) => <ContributorCard item={item} />}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          ) : teamData?.heads?.length === 0 && teamData?.members?.length === 0 ? (
            <Text style={styles.noDataText}>
              No contributors available for this team.
            </Text>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {teamData?.heads?.length > 0 && (
                <>
                  <SectionHeader title="Team Heads" />
                  <FlatList
                    key={`heads-${selectedTeam}`}
                    data={teamData.heads}
                    numColumns={2}
                    keyExtractor={(item, index) => `head-${item.name}-${index}`}
                    renderItem={({ item }) => (
                      <View style={styles.gridItem}>
                        <ContributorCard item={item} />
                      </View>
                    )}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: 16 }}
                  />
                </>
              )}

              {teamData?.members?.length > 0 && (
                <>
                  <View style={{ marginTop: 16 }}>
                    <SectionHeader title="Team Members" />
                  </View>
                  <FlatList
                    key={`members-${selectedTeam}`}
                    data={teamData.members}
                    numColumns={2}
                    keyExtractor={(item, index) => `member-${item.name}-${index}`}
                    renderItem={({ item }) => (
                      <View style={styles.gridItem}>
                        <ContributorCard item={item} />
                      </View>
                    )}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                  />
                </>
              )}
            </ScrollView>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    backgroundColor: '#F7931E',
    borderBottomRightRadius: 100,
    padding: 20,
    paddingTop: 60,
    zIndex: 10,
  },
  dropdown: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropdownText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#333',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownItemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#333',
  },
  dropdownItemTextSelected: {
    color: '#F09216',
    fontFamily: 'Poppins-Bold',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 8,
  },
  gridItem: {
    flex: 1,
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    backgroundColor: '#ccc',
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
  noDataText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
});
