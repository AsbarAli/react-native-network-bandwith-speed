## Installation

yarn add react-native-network-bandwith-speed

or 

npm install react-native-network-bandwith-speed --save

## Quick Start

import {measureConnectionSpeed} from 'react-native-network-bandwith-speed';
```
  getNetworkBandwidth = async (): Promise<void> => {
    try {
      const networkSpeed: NetworkBandwidthTestResults = await measureConnectionSpeed();
      console.log('networkSpeed',networkSpeed);    
    } catch (err) {
      console.log('err',err);  
    }
  }
```

### props
* ImageURI: Any image URI of an 1.5 Mb image,if not provided default image URI would be used. 

License
----

MIT


**Free Software!**
```
