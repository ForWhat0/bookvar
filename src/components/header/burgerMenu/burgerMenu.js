import { StyledBurger } from "./buergerMenuStyled";
import { useDispatch, useSelector } from "react-redux";
import { actionClickBurger } from "../../redux/actions/actions";

export const Burger = ({ footer, color, dark }) => {
  const dispatch = useDispatch();
  const { menuBurgerIsOpen } = useSelector((state) => state.app);
  return (
    <StyledBurger
      footer={footer}
      dark={dark}
      color={color}
      open={menuBurgerIsOpen}
      onClick={() => dispatch(actionClickBurger())}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

