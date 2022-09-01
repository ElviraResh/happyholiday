import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import { URI_API } from "../../../const/const";
import { holidaysContext } from "../../../context/holidaysContext";


const ImageCard = () => {
  const {holiday} = useContext(holidaysContext);
  const img = useContext(imgContext);
  console.log(img);
  return (
    <img src={`${URI_API}image/${holiday}/${img}`} alt="Фон открытки" width={840} height={520} />
  )
};

export default ImageCard;