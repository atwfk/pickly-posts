import * as actionTypes from "../actions/actionTypes";

const posts = (state = [], action) => {
  const stateLen = state.length;
  switch (action.type) {
    case actionTypes.START_POST:
      return [
        ...state,
        {
          type: "",
          postTitle: "",
          fileUrls: [],
          favorites: [],
          miniSurvey: [],
        },
      ];
    case actionTypes.ADD_IMAGES:
      return state.map((post, i) => {
        if (stateLen === i + 1) {
          post.fileUrls = [...post.fileUrls, action.payload.fileUrls];
        }
        return post;
      });
    case actionTypes.ADD_FAVORITES:
      return state.map((post, i) => {
        if (stateLen === i + 1) {
          post.favorites = action.payload.favorites;
        }
        return post;
      });
    case actionTypes.ADD_POST:
      return state.map((post, i) => {
        if (stateLen === i + 1) {
          post.type = action.payload.type;
          post.postTitle = action.payload.postTitle;
          post.miniSurvey = action.payload.miniSurvey;
        }
        return post;
      });
    default:
      return state;
  }
};

export default posts;
