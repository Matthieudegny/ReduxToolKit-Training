import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});

/*
contrairemetn à redux avec son fichier Store.js dans le dossier Store:
Redux = appel des middlewares + reducer qui est le fichier qui regroupe l'ensemble des reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(middlewareRecipes, middlewareSuggestions,middlewareFridge),
);
const store = createStore(reducer,enhancers);
export default store;

Toolkit = fichier store.js dans dossier app et fichier exemple.slice.js dans dossier feature 
Ici ce sont les slices qui sont appelés qui representent "les reducers + actions" (à voir pour les middlewares avec createAsyncThunk)
! configure store et non createStore
*/