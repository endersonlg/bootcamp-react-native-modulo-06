import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class Star extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('star').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    star: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const star = navigation.getParam('star');
    this.setState({ star });
    console.tron.log(star);
  }

  render() {
    const { star } = this.state;
    return <WebView source={{ uri: star.html_url }} />;
  }
}
