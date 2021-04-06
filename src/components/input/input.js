import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const InputField = styled.div`
  @media screen and ${device.laptop} {
    width: 100%;
  }
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
  width: ${(props) => props.width};
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  onChange: props.onChange,
  maxlength: props.maxlength,
  placeholder: props.placeholder,
}))`
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px;
  background: transparent;
  width: 100%;
  color: white;
  font-size: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }

  @media screen and ${device.tablet} {
    font-size: 16px;
  }
  @media screen and ${device.mobileL} {
    font-size: 14px;
  }
`;
export const Text = styled.label`
  font-weight: normal;
  text-align: start;
  font-size: 16px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Icon = styled.i`
  position: absolute;
  right: 20px;
  z-index: 1;
  color: red;
  font-size: 20px;
  display: ${(props) => props.display};
`;

export const InputStyled = ({
  warning,
  maxlength,
  text,
  width,
  onChange,
  value,
}) => {
  const [warningText, setWarningText] = useState("");

  useEffect(() => {
    setWarningText(warning ? warning : "");
  }, [warning]);

  const { visuallyImpairedModeWhiteTheme } = useSelector((state) => state.app);

  return (
    <InputField width={width} onClick={() => setWarningText("")}>
      <div>
        <InputContainer>
          <Icon
            display={warningText.length ? "block" : "none"}
            className="fa fa-exclamation-triangle"
            aria-hidden="true"
          />
          <Input
            placeholder={warningText ? warningText : text}
            color={visuallyImpairedModeWhiteTheme ? "#1D1D1B" : "white"}
            value={value}
            maxLength={maxlength || 20}
            onChange={onChange}
          />
        </InputContainer>
      </div>
    </InputField>
  );
};
