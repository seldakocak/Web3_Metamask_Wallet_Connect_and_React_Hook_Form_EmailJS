# Web3 Metamask Wallet Connect / React-Hook-Form and EmailJS

## Setup 🛠️
[Metamask Doc](https://metamask.zendesk.com/hc/en-us/articles/360060263391-How-to-find-and-manage-your-MetaMask-Extension-on-Chrome-and-Firefox)\
[Metamask for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)\
[Metamask for Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)\
[Metamask Polygon Mainnet](https://chainlist.org/chain/137)

## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/seldakocak/Web3_Metamask_Wallet_Connect_and_React_Hook_Form_EmailJS.git
```

Make sure you have [node.js](https://nodejs.org/en/) installed so you can use npm, then run:

```sh
npm install
```

After all the changes you can run.

```sh
npm start
```

Or create the build if you are ready to deploy.

```sh
npm run build
```

Now you can host the contents of the build folder on a server.

That's it!

**Important:** If you're using the code for a module that requires API keys or a backend (e.g. the module about sending Http requests), you'll have to use your backend URLs or API keys. 

## Dependencies ℹ️

### Web3
```sh
npm install web3

# or

yarn add web3
```

### Redux
```sh
npm install redux react-redux redux-thunk

# or

yarn add redux react-redux redux-thunk
```

### React Hook Form
```sh
npm install react-hook-form @hookform/error-message

# or

yarn add react-hook-form @hookform/error-message
```

### EmailJS
```sh
npm install emailjs-com --save

# or

yarn add emailjs-com --save
```

## DevDependencies ℹ️

### Babel
```sh
npm install -D @babel/core@latest @babel/preset-env@latest

# or

yarn add -D @babel/core@latest @babel/preset-env@latest
```
