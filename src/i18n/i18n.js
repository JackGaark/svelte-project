import {init, getLocaleFromNavigator, addMessages} from 'svelte-i18n';
import {en} from './en';
import {fr} from './fr';
export const initI18n = () => {
  addMessages('en', en);
  addMessages('fr', fr);
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
};
