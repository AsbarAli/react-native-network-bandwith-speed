import RNFetchBlob from 'react-native-fetch-blob';

const downloadSizeInBits = 1500411 * 8;
const metric = 'MBps';

export const measureConnectionSpeed = (imageURI: string): any => {
  return new Promise((resolve, reject) => {
    const startTime = (new Date()).getTime();
    RNFetchBlob
      .config({
        fileCache: false,
      })
      .fetch('GET', imageURI, {})
      .then((res) => {
        const endTime = (new Date()).getTime();
        const duration = (endTime - startTime)/ 1000;
        const speed = (downloadSizeInBits/ (1024 * 1024 * duration));

        resolve({metric, speed});
      })
      .catch(reject);
  });
};
