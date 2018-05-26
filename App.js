import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.232309,
          longitude:  115.127863
        },
        title: 'Wanagiri Tower Garden',
        subtitle: 'Jl. Raya Wanagiri, Wanagiri, Sukasada, Kabupaten Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.172441, 
          longitude: 115.104573
        },
        title: 'Aling-Aling Waterfall',
        subtitle: 'Jalan Raya Desa Sambangan, Sambangan, Sukasada, Sambangan, Sukasada, Kabupaten Buleleng, Bali 81161'
      },
      {
        key:3,
        latlng: {
            latitude:-8.187277, 
            longitude: 115.136643
        },
        title: 'Gitgit Waterfall',
        subtitle: 'Jl. Raya Wanagiri, Wanagiri, Sukasada, Kabupaten Buleleng, Bali'
      }
      ,
      {
        key:4,
        latlng: {
            latitude:-8.148655, 
            longitude: 115.102099
        },
        title: 'Kolam Renang Taman Tao',
        subtitle: 'Jl. I Dewa Made Kaler, Sukasada, Kabupaten Buleleng, Bali 81161'
      }
      ,
      {
        key:5,
        latlng: {
            latitude:-8.174300, 
            longitude: 115.106610
        },
        title: 'Krisna Adventure Aling-Aling Waterfall',
        subtitle: 'Desa Sambangan, Sukasada, Sambangan, Sukasada, Kabupaten Buleleng, Bali 81161'
      }
      ,
      {
        key:6,
        latlng: {
            latitude:-8.184532, 
            longitude: 115.065154
        },
        title: 'Tepi Bukit',

      }
      ,
      {
        key:7,
        latlng: {
            latitude:-8.184532, 
            longitude: 115.065154
        },
        title: 'Tepi Bukit',

      }
      
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Object Bali Selatan
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Aditya Wiguna </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#61baf4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#61baf4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
