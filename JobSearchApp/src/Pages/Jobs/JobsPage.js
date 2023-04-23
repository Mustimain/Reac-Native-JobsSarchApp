import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import styles from './JobsPage.style';
import JobsCard from '../../Components/JobsCard';
import {useEffect} from 'react';
import useFetch from '../../Hooks/useFetch/useFetch';

const JobsPage = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);

  const {data, dataLoading, dataError} = useFetch(
    'https://www.themuse.com/api/public/jobs?page=1&descending=true',
  );

  useEffect(() => {
    console.log(data.results);
  }, [data]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={({item}) => <JobsCard job={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobsPage;
