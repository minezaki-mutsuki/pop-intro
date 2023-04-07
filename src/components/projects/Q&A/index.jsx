import { useNavigate } from "react-router-dom";
import { Button } from "../../uiParts/button";
import { QaButton } from "../../uiParts/qaButton";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, QandAWrapper, Wrapper } from "./style";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "https://pop-intro.netlify.app/src/firebase-config.js";

export const QandA = () => {
  const navigate = useNavigate();
  const onClickToQandA = () => {
    navigate("/qanda");
  };

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

  return (
    <Wrapper>
      <Title title={"Q&A"} />
      <QandAWrapper>
        {postList.slice(0, 3).map((items, index) => (
          <QaButton
            key={index}
            qestion={items.qestion}
            answer={items.answer}
            id={items.id}
          />
        ))}
      </QandAWrapper>
      <ButtonWrapper>
        <Button text={"Q&A一覧"} onClick={onClickToQandA} />
      </ButtonWrapper>
    </Wrapper>
  );
};
