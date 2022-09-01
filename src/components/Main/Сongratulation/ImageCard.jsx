import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import { URI_API } from "../../../const/const";


const ImageCard = () => {
  const img = useContext(imgContext);
  console.log(img);
  return (
    <img src={`${URI_API}image/${img}`} alt="Фон открытки" width={840} height={520} />
  )
};

export default ImageCard;