import { useNavigate } from "react-router-dom";
import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Button } from "../../uiParts/button";
import { QaButton } from "../../uiParts/qaButton";
import {
  BodyWrapper,
  ButtonWrapper,
  ModalText,
  PostButton,
  PostWrapper,
  StyledTextarea,
  Wrapper,
} from "./style";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const QandALayout = () => {
  const navigate = useNavigate();
  const onClickToTop = () => {
    navigate("/");
  };

  const [isPosted, setIsPosted] = useState(false);
  const [qestion, setQestion] = useState("");
  const answer =
    "質問ありがとうございます。部員が回答するまでしばらくお待ちください。";

  const createPost = async () => {
    if (qestion === "") {
      setIsPosted(true);
      setTimeout(() => {
        setIsPosted(false);
      }, 3000);
    } else {
      const postsCollectionRef = collection(db, "posts");
      await addDoc(postsCollectionRef, {
        qestion,
        answer,
      });
      window.location.reload();
      setIsPosted(true);
      setTimeout(() => {
        setIsPosted(false);
      }, 3000);
    }
  };

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  return (
    <Wrapper>
      <Header choice={false} />
      <BodyWrapper>
        {postList.map((item) => (
          <>
            <QaButton
              key={item.id}
              qestion={item.qestion}
              answer={item.answer}
              id={item.id}
            />
          </>
        ))}
      </BodyWrapper>
      <PostWrapper>
        <StyledTextarea
          placeholder="質問を記入して送信ボタンを押してください"
          onChange={(e) => setQestion(e.target.value)}
        />
        <PostButton onClick={createPost}>送信</PostButton>
        {isPosted && (
          <ModalText>
            {qestion === "" ? "質問を入力してください" : "正常に送信されました"}
          </ModalText>
        )}
      </PostWrapper>
      <ButtonWrapper>
        <Button text={"トップに戻る"} onClick={onClickToTop} />
      </ButtonWrapper>
      <Footer choice={false} />
    </Wrapper>
  );
};
