import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {Text} from 'react-native';

import {measureConnectionSpeed} from './NetworkBandwith';

class NWBandwith extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      networkSpeed: '',
    };
  }

  componentDidMount() {
    this.measureNetworkBandwith(this.props.imageURI);
  }

  measureNetworkBandwith = async (imageURI: string) : Promise<void> => {
    try {
      const networkSpeed = await measureConnectionSpeed(imageURI);
      this.setState({
        networkSpeed,
      });
    } catch (error) {
      // handle error
    }
  }

  render(): ReactElement<any> {
    const {networkSpeed: {speed}} = this.state;
    const content = speed? ( <Text>{speed}</Text>): ( <Text>Loading...</Text>);
    return (
      content
    );
  }
}

export default NWBandwith;

