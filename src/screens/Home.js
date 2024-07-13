import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const trackers = [
  {
    title: 'Task',
    animation: require('../assets/lottie/task.json'),
  },
  {
    title: 'Hydrate',
    animation: require('../assets/lottie/water.json'),
  },
  {title: 'Exercise', animation: require('../assets/lottie/exercise.json')},
  {title: 'Mood', animation: require('../assets/lottie/mood.json')},
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <LottieView
          source={require('../assets/lottie/loader.json')}
          autoPlay
          loop
          style={styles.loadingLottie}
        />
      ) : (
        <View>
          <View style={styles.headerContainer}>
            <LottieView
              source={require('../assets/lottie/header-animation.json')}
              autoPlay
              resizeMode="cover"
              loop
              style={styles.headerLottie}
            />
          </View>
          <View style={styles.listMainContainer}>
            <FlatList
              data={trackers}
              numColumns={2}
              contentContainerStyle={styles.listContainer}
              columnWrapperStyle={styles.columnStyle}
              keyExtractor={item => item.title}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemContainer}>
                    {item?.animation ? (
                      <LottieView
                        source={item.animation}
                        autoPlay
                        resizeMode="cover"
                        loop
                        style={styles.itemLottie}
                      />
                    ) : null}
                    <Text style={styles.itemText}>{item.title}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white', flex: 1},
  loadingLottie: {height: '100%', width: '100%'},
  itemText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 6,
  },
  itemLottie: {
    width: 100,
    height: 100,
  },
  itemContainer: {
    borderRadius: 20,
    width: '45%',
    borderWidth: 1,
    borderColor: 'orange',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnStyle: {
    padding: 16,
    justifyContent: 'space-between',
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listMainContainer: {
    flexGrow: 1,
    height: '70%',
  },
  headerLottie: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C5D5E5',
  },
  headerContainer: {
    width: '100%',
    height: '20%',
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default Home;
