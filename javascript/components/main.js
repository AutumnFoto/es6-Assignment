import { navigationEvents } from './navigation.js';
import { makeStore } from './store.js';
import { getBooks } from '../helpers/bookData.js';

const init = () => {
  navigationEvents();
  makeStore(getBooks('all'));
};

init();