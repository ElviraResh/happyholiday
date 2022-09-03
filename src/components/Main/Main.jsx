import Container from "../Container/Container";
import Felicitation from "./Сongratulation/Felicitation";
import ImageCard from "./Сongratulation/ImageCard";
import style from "./Main.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTextId } from "../../store/textSlice";
import { fetchImageId } from "../../store/imgSlice";


const Main = () => {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImg));
    }
  })
  return (
    <Container>
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <ImageCard />
            <Felicitation />
          </div>
        </div>
      </div>
    </Container>
  )
};

export default Main;