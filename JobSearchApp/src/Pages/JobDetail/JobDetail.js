import React from 'react';
import {SafeAreaView, Text, View, FlatList, ScrollView} from 'react-native';
import styles from './JobDetail.style';
import {useEffect} from 'react';
import useFetch from '../../Hooks/useFetch/';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import Button from '../../Components/Button/Button';

const JobDetail = ({navigation, route}) => {
  const [loading, setLoading] = React.useState(true);
  const jobDet = route.params;
  console.log({jobDet});
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.baseContainer}>
      <View style={styles.container}>
        <Text style={styles.jobnameContainer}>{jobDet.item.name}</Text>
        <Text style={styles.jobLocationContainer}>
          Locations:
          <Text style={styles.jobLocationInnerContainer}>
            {jobDet.item.locations[0].name}
          </Text>
        </Text>
        <Text style={styles.jobLevelContainer}>
          Job Level:
          <Text style={styles.jobLevelInnerContainer}>
            {jobDet.item.levels[0].name}
          </Text>
        </Text>
        <Text style={styles.jobDetailContainer}>Job Detail</Text>
      </View>

      <ScrollView style={styles.htmlViewerContainer}>
        <View style={styles.htmlViewerContainer}>
          <RenderHtml
            contentWidth={width}
            source={{html: jobDet.item.contents}}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text="Gönder" />
        <Button text="Favori" />
      </View>
    </SafeAreaView>
  );
};

export default JobDetail;
