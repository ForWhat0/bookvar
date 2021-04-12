import {
  clickBurger,
  clickVideoModal,
  clickModal,
  scrollToElement, slideToRedux,
} from "../types/types";

export function actionClickBurger() {
  return (dispatch) => {
    dispatch({
      type: clickBurger,
    });
  };
}
export function actionClickModal(obj) {
  return (dispatch) => {
    dispatch({
      type: clickModal,
      payload: obj,
    });
  };
}
export function actionClickVideoModal(obj) {
  return (dispatch) => {
    dispatch({
      type: clickVideoModal,
      payload: obj,
    });
  };
}

export const ScrollToElement = (string) => {
  return (dispatch) => {
    dispatch({ type: scrollToElement, payload: string });
  };
};
export const SlideToHandler = (string) =>{
  return (dispatch) => {
    dispatch({ type: slideToRedux, payload: string });
  };
}
