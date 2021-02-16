import * as actionTypes from "../actions/actionTypes";

export const startPostCreator = () => ({
  type: actionTypes.START_POST,
});

export const addImagesCreator = (fileUrls) => ({
  type: actionTypes.ADD_IMAGES,
  payload: { fileUrls },
});

export const addFavoritesCreator = (favorites) => ({
  type: actionTypes.ADD_FAVORITES,
  payload: { favorites },
});

export const addPostCreator = (type, postTitle) => ({
  type: actionTypes.ADD_POST,
  payload: { type, postTitle },
});
