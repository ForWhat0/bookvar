import {
  clickBurger,
  scrollToElement, clickVideoModal, slideToRedux, clickModal,
} from "../types/types";

const initialState = {
  menuBurgerIsOpen: false,
  VideoModalIsOpen: false,
  scrollToElement: null,
  swiperSlideTo: 'null',
  modal:false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case slideToRedux: {
      return {
        ...state,
        swiperSlideTo: action.payload,
      };
    }
    case clickModal: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    case scrollToElement: {
      return {
        ...state,
        scrollToElement: action.payload,
      };
    }
    case clickVideoModal: {
      return {
        ...state,
        VideoModalIsOpen: action.payload,
      };
    }
    case clickBurger: {
      return {
        ...state,
        menuBurgerIsOpen: !state.menuBurgerIsOpen,
      };
    }
    default:
      return state;
  }
};
