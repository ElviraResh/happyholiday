import { useSelector } from "react-redux";
import CardBG from "../../../img/card-bg.jpg";


const ImageCard = () => {
  const {urlImg} = useSelector(state => state.image);
  //console.log(urlImg);
  return (
    <img src={ urlImg || CardBG } alt="Фон открытки" width={840} height={520} />
  )
};

export default ImageCard;