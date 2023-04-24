import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({job, handlePressDetail}) => {
  return (
    <TouchableOpacity onPress={handlePressDetail}>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>{job.name}</Text>
        <Text style={styles.companyContainer}>{job.company.name}</Text>
        <View style={styles.locationContainer}>
          <View style={styles.locationRadiusContainer}>
            <Text style={styles.locationInnerContainer}>
              {job.locations[0].name}
            </Text>
          </View>
        </View>
        <View style={styles.jobLevelContainer}>
          <Text style={styles.jobLevelInnerContainer}>
            {job.levels[0].name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;
