import {
  hideLoader,
  showLoader,
  clickBurger,
  clickOnOffImages,
  clickVisuallyImpairedModeOn,
  clickVisuallyImpairedModeOff,
  clickOnOffVisuallyImpairedModeWhiteTheme,
  changeFontSizeNormal,
  scrollToElement, clickVideoModal, slideToRedux, clickModal,
} from "../types/types";

const initialState = {
  loading: false,
  menuBurgerIsOpen: false,
  VideoModalIsOpen: false,
  visuallyImpairedMode: false,
  fontSize: "normal",
  images: true,
  visuallyImpairedModeWhiteTheme: true,
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
    case changeFontSizeNormal: {
      return {
        ...state,
        fontSize: action.payload,
      };
    }
    case clickOnOffVisuallyImpairedModeWhiteTheme: {
      return {
        ...state,
        visuallyImpairedModeWhiteTheme: action.payload,
      };
    }
    case clickVisuallyImpairedModeOn: {
      return {
        ...state,
        visuallyImpairedMode: true,
        images: false,
      };
    }
    case clickVisuallyImpairedModeOff: {
      return {
        ...state,
        visuallyImpairedMode: false,
        images: true,
        visuallyImpairedModeWhiteTheme: true,
        fontSize: "normal",
      };
    }
    case clickOnOffImages: {
      return {
        ...state,
        images: !state.images,
      };
    }

    case showLoader: {
      return {
        ...state,
        loading: true,
      };
    }
    case hideLoader: {
      return {
        ...state,
        loading: false,
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
