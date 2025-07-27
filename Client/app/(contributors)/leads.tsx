import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { contributorsData } from '../../src/data/contributorsData';
import ContributorCard from '@/components/cards';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const teamOptions = [
  { label: 'Project Leads', value: 'projectLeads' },
  { label: '3D Team', value: 'team3D' },
  { label: 'AR Team', value: 'teamAR' },
  { label: 'Authoring Team', value: 'teamAuthoring' },
  { label: 'E-Contents Team', value: 'teamEContent' },
];

const SectionHeader = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

export default function LeadsScreen() {
  const [selectedTeam, setSelectedTeam] = useState('projectLeads');
  const [displayedTeam, setDisplayedTeam] = useState('projectLeads');

  const teamData = contributorsData[displayedTeam] || [];
  const isProjectLeads = displayedTeam === 'projectLeads';

  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const duration = 350;

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animateOutIn = (newTeam: string) => {
    opacity.value = withTiming(0, { duration }, () => {
      runOnJS(setDisplayedTeam)(newTeam);
      translateY.value = 20;
      opacity.value = withTiming(1, { duration });
      translateY.value = withTiming(0, { duration });
    });
  };

  const handleChange = (item: any) => {
    setSelectedTeam(item.value);
    animateOutIn(item.value);
  };

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
            onChange={handleChange}
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

        <Animated.View style={[styles.bottomContainer, animatedStyle]}>
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
                    key={`heads-${displayedTeam}`}
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
                    key={`members-${displayedTeam}`}
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
        </Animated.View>
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
  noDataText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
});
