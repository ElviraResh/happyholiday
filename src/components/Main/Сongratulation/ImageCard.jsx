import { useSelector } from "react-redux";
import CardBG from "../../../img/card-bg.jpg";


const ImageCard = () => {
  const {image} = useSelector(state => state.image);
  //console.log(urlImg);
  return (
    <img src={ CardBG || image.urlImg} alt="Фон открытки" width={840} height={520} />
  )
};

export default ImageCard;