import { useDispatch, useSelector } from "react-redux";
import { CloseModalButton, FormContainer, StyledModal,Close } from "./modalStyled";
import { InputStyled } from "../input/input";
import { LoaderContainer } from "../leftComment/leftCommentStyLedComponents";
import { useEffect, useState } from "react";
import { SendButton } from "../sendButton/sendButton";
import { actionClickModal } from "../../redux/actions/actions";
import { ModalLsi } from "../../Lsi/lsi";
import { useRouter } from "next/router";
import { StyledButton } from "../button/button";
import { Blob } from "../blobBg/blob";
import { sendStatementHook } from "../hooks/hooks";
import { useMutation } from "@apollo/client";
import { SendWordpress } from "../../mutations/send-wordpress";

const {
  title,
  subTitleGet,
  subTitleSignUp,
  nameLsi,
  phoneNumber,
  emptyFields,
  wrongData,
  send,
  thanks,
  sent,
  sentText,
  close,
} = ModalLsi;


export const Modal = () => {
  const { modal } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameWarning, setNameWarning] = useState(null);
  const [phoneWarning, setPhoneWarning] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, []);

  const sendStatement = async ( event ) => {

    event.preventDefault()

    if (!name) {
      return setNameWarning(emptyFields[locale]);
    }
    if (!phone) {
      return setPhoneWarning(emptyFields[locale]);
    }
    if (
      phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    ) {
      await sendWordpress();
      await sendStatementHook(sendContent);
    } else {
      setPhone("");
      return setPhoneWarning(wrongData[locale]);
    }
  };

  const clearAllFields = () => {
    setDone(true);
    setName("");
    setPhone("");
    setNameWarning("");
    setPhoneWarning("");
  };

  const sendContent = `
        <h1>Заява</h1>
        <h2>${
          modal === "get"
            ? "отримати уроки в VR і AR"
            : "записатися на демонстрацію"
        }</h2>
        <ul>
        <li>ім'я: ${name};</li>
        <li>телефон: ${phone};</li>
        <li>id: ${Math.random() + Math.random()}</li>
        <ul/>
        `;

  let [sendWordpress, { data, error, loading }] = useMutation(SendWordpress, {
    variables: {
      input: {
        commentOn: 2,
        content: sendContent,
        author: name,
      },
    },
    onCompleted: () => {
      if (!error) {
        clearAllFields();
      }
    },
    onError: (error) => {
      if (error) {
        clearAllFields();
      }
    },
  });

  if (modal) {
    return (
      <StyledModal>
        <FormContainer>
          <form>
            <Close  onClick={() => dispatch(actionClickModal(false))}/>
            <Blob modal={true} />
            <Blob modal={true} different={true} />
            {!done ? (
              <>
                <h1>{title[locale]}</h1>
                <h3>
                  {modal === "get"
                    ? subTitleGet[locale]
                    : subTitleSignUp[locale]}
                </h3>
                <InputStyled
                  value={name}
                  maxlength="20"
                  warning={nameWarning}
                  text={nameLsi[locale]}
                  onChange={(e) => setName(e.target.value)}
                  width="100%"
                />
                <InputStyled
                  value={phone}
                  maxlength="20"
                  warning={phoneWarning}
                  text={phoneNumber[locale]}
                  onChange={(e) => setPhone(e.target.value)}
                  width="100%"
                />
                <LoaderContainer>
                  <SendButton
                    sentText={sent[locale]}
                    sendText={send[locale]}
                    errorText={sent[locale]}
                    error={error}
                    done={data}
                    loading={loading}
                    click={sendStatement}
                  />
                </LoaderContainer>
              </>
            ) : (
              <>
                <h1>{thanks[locale]}</h1>
                <h3>{sent[locale]}</h3>
                <h3>{sentText[locale]}</h3>
                <CloseModalButton>
                  <StyledButton
                    onclick={() => dispatch(actionClickModal(false))}
                    text={close[locale]}
                  />
                </CloseModalButton>
              </>
            )}
          </form>
        </FormContainer>
      </StyledModal>
    );
  }
  return null;
};
