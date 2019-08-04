## react-native-network-bandwidth-speed
Easily check for network bandwidth speed in React Native

## Install

```
$ npm install react-native-network-bandwith-speed --save
```

or if you're using [yarn](https://yarnpkg.com),

```
$ yarn add react-native-network-bandwith-speed
```

## Quick Start

```
import { measureConnectionSpeed } from 'react-native-network-bandwith-speed';

  getNetworkBandwidth = async (): Promise<void> => {
    try {
      const networkSpeed: NetworkBandwidthTestResults = await measureConnectionSpeed();
      console.log(networkSpeed); // Network bandwidth speed 
    } catch (err) {
      console.log(err);  
    }
  }
```

### props
* ImageURI: Any image URI of an 1.5 Mb image,if not provided default image URI would be used. 


### Milestones

- [ ] Add demo app
- [ ] Improve npm docs
- [X] Add CONTRIBUTING.md
- [ ] Add CODE_OF_CONDUCT.md
- [ ] Add CHANGELOG
- [ ] Speed tests for download/upload

## Contributor guidelines

- Fork the repository.
- Clone the forked repository.
- Create your own branch.
- Create a pull request with changes made.


License
----

MIT

