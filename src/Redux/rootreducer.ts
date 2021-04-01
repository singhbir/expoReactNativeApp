import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  blank: function (state: {}, action) {
    return {};
  },
});
