// import xhr from 'utils/xhr';
import { getMatchedUrl } from 'utils/location';

export default Base =>
  class extends Base {
    async matchLocationPath() {
      const matchedUrl = getMatchedUrl();
      // console.log(matchedUrl);
      switch (true) {
        default:
          if (!!matchedUrl) {
          }
      }
    }
  };
