import { createSlice } from "@reduxjs/toolkit";
/*j'importe createSlice de reduxToolKit pour la création du slice et je l'utilise pour créer mon compartiment 
de state enregistré dans ma variable picturesSlice

contrairement à redux ou je déclare le state initiale + création du reducer ->

export const initialState = {
    logged: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;
*/

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    /* je crée ici les fonctions appelées dans mes composants qui renferment l'action + le state*/
    setPicturesData: (state, { payload }) => {
      state.pictures = payload;
    },
    addPicture: (state, { payload }) => {
      state.pictures.push(payload);
    },
    editPicture: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, { payload }) => {
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
  },
});

/*subitlité ici contraierement à redux, je dois exporter chaque fonction de mon slice pour pouvoir les
utiliser dans mes composants + exporter le slice qui est utilisé dans le store*/
export const { setPicturesData, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;
export default picturesSlice.reducer;
