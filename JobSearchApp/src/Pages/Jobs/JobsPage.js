import {React, useRef, useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import styles from './JobsPage.style';
import JobsCard from '../../Components/JobsCard';
import {useEffect} from 'react';
import useFetch from '../../Hooks/useFetch/useFetch';

const JobsPage = ({navigation}) => {
  const JOB_API_URL = 'https://www.themuse.com/api/public/jobs?page';
  const {data, dataLoading, dataError} = useFetch(`${JOB_API_URL}=0`);
  const flatListRef = useRef(null);

  const handleJobDetail = item => {
    navigation.navigate('JobDetail', {item});
  };

  const renderJobCards = ({item}) => (
    <JobsCard job={item} handlePressDetail={() => handleJobDetail(item)} />
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={data.results}
          renderItem={renderJobCards}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobsPage;
