import { createStore } from 'redux';
import {basketReducer} from '../store/reducer/basketReducer'

export const store = createStore(basketReducer);