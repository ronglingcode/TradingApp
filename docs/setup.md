# Clone the repo
Just run
```
npm install
```

# Create project
```
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force
npm install sunrise-tv-lightweight-charts
```

# Add custom built lightweight charts
1. Check out lightweight charts locally, make desired changes and then run
```
npm install
npm run prepare-release
```

2. Copy `lightweight-charts.esm.development.js` file to `/src` here.

3. In a separate folder/npm project, install `fancy-canvas` for version 0.2.2
```
npm install fancy-canvas@0.2.2
```

4. Copy the file content in `node_modules/fancy-canvas/`, paste it into `lightweight-charts.esm.development.js`. Remove the import line, we can directly pasting code here.

# Add Google Firebase
```
npm install firebase
```
Initailize
```
$ firebase init hosting
```
Deploy
```
$ npm run build
$ firebase deploy --only hosting
```
# Add unit test
```
npm install --save-dev @web/test-runner @snowpack/web-test-runner-plugin chai @types/mocha @types/chai
```

# Refresh TD Ameritrade Token
## New method
```
td = window.HybridApp.Api.TdaApi;
td.generateRefreshTokenUrl();
# go to the url and sign in. copy the url
url = `{copied_url}`;
td.generateRefreshToken(url);
```

## Old method

1. go to this url to sign in https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=https%3A%2F%2Flocalhost&client_id=EXAMPLE%40AMER.OAUTHAP , replace EXAMPLE with actual client_id

2. copy paste the url from the address bar, store it in a python shell variable

```
python
copied_url = '...'
```

3. extract code by running the following script

```
from urllib.parse import unquote
raw_code=copied_url.split('code=')[1]
code=unquote(raw_code)
```

4. make a request here to get access token https://developer.tdameritrade.com/authentication/apis/post/token-0. grant_type is authorization_code and access_type is offline. Redirect url is https://localhost

5. then copy paste the refresh_token and access_token to the local file.

