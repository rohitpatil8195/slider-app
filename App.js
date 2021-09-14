import React from 'react';
import { View, Text, I18nManager } from 'react-native';
import { Provider } from 'react-redux';
import store, {persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import App2 from './src/Navigation/Stack';
import {LocalizationProvider} from './src/services/LocalizationContext';

// const translationGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   en: () => require("./src/locales/en.json"),
//   fr: () => require("./src/locales/fr.json"),
//   it: () => require("./src/locales/it.json"),
// };

// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key)
// );

// const setI18nConfig = () => {
//   // fallback if no available language fits
//   const fallback = { languageTag: "en", isRTL: false };

//   const { languageTag, isRTL } =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;

//   // clear translation cache
//   translate.cache.clear();
//   // update layout direction
//   I18nManager.forceRTL(isRTL);
//   // set i18n-js config
//   i18n.translations = { [languageTag]: translationGetters[languageTag]() };
//   i18n.locale = languageTag;
// };

export default class App extends React.Component {
  constructor(props) {
    super(props);
   
  }

  // componentDidMount() {
  //   RNLocalize.addEventListener("change", this.handleLocalizationChange);
  // }

  // componentWillUnmount() {
  //   RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  // }

  // handleLocalizationChange = () => {
  //   setI18nConfig();
  //   this.forceUpdate();
  // };
  render() {
  return (
    <LocalizationProvider>
    <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>
      <App2 />
      </PersistGate>
    </Provider>
    </LocalizationProvider>
  );
};
}