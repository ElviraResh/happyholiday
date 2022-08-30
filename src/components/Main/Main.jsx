import Container from "../Container/Container";
import Felicitation from "./Сongratulation/Felicitation";
import Image from "./Сongratulation/Image";
import style from "./Main.module.css";

const Main = () => (
    <Container>
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <Image />
            <Felicitation />
          </div>
        </div>
      </div>
    </Container>
);

export default Main;