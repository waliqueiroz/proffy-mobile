import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return <View style={styles.container} >
    <PageHeader title="Meus proffys avoritos" />
    <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }} >
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </ScrollView>
  </View>
}

export default Favorites;