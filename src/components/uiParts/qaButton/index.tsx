import { useState } from "react";
import {
  AnswerWrapper,
  Atext,
  ButtonWrapper,
  ModalText,
  PostButton,
  Qestion,
  Qtext,
  StyledTextarea,
  Wrapper,
} from "./style";
import { IconContext } from "react-icons";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
import { useCurrentUser } from "../../../useCurrentUser";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "https://pop-intro.netlify.app/src/firebase-config.js";

type QaButtonProps = {
  qestion: string;
  answer: string;
  id: string;
};

export const QaButton = ({ qestion, answer, id }: QaButtonProps) => {
  const user = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const deletePost = async (id: string) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
    setIsDeleted(true);
    setTimeout(() => {
      setIsDeleted(false);
    }, 3000);
  };

  const answerPost = async (id: string) => {
    if (answerText === "") {
      setIsPosted(true);
      setTimeout(() => {
        setIsPosted(false);
      }, 3000);
    } else {
      const postDoc = doc(db, "posts", id);
      await updateDoc(postDoc, {
        answer: answerText,
      });
      window.location.reload();
      setIsPosted(true);
      setTimeout(() => {
        setIsPosted(false);
      }, 3000);
    }
  };

  const IconOpen = (
    <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
      <TfiAngleUp />
    </IconContext.Provider>
  );
  const IconClose = (
    <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
      <TfiAngleDown />
    </IconContext.Provider>
  );

  return (
    <Wrapper>
      <Qestion onClick={() => setIsOpen(!isOpen)}>
        <Qtext>{qestion}</Qtext>
        {isOpen ? IconOpen : IconClose}
      </Qestion>
      {isOpen && (
        <>
          <Atext>{answer}</Atext>
          {user && (
            <AnswerWrapper>
              <StyledTextarea
                onChange={(e) => setAnswerText(e.target.value)}
                placeholder="回答を入力してください"
              />
              <ButtonWrapper>
                <PostButton onClick={() => answerPost(id)}>回答する</PostButton>
                <PostButton onClick={() => deletePost(id)}>削除する</PostButton>
              </ButtonWrapper>
              {isPosted && (
                <ModalText>
                  {answerText === ""
                    ? "回答を入力してください"
                    : "正常に送信されました"}
                </ModalText>
              )}
              {isDeleted && <ModalText>削除が完了しました</ModalText>}
            </AnswerWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
};
