import Container from "../Container/Container";
import Felicitation from "./Сongratulation/Felicitation";
import ImageCard from "./Сongratulation/ImageCard";
import style from "./Main.module.css";
import CardBG from "../../img/card-bg.jpg"

const Main = () => (
    <Container>
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <ImageCard img={CardBG}/>
            <Felicitation />
          </div>
        </div>
      </div>
    </Container>
);

export default Main;