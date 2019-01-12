import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button  onPress={() =>
            this.props.navigation.navigate('Buy')
          } title="BUY"/>
      <Button onPress={()=>
      this.props.navigation.navigate('Sell')
      } title="SELL"/>
   
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
