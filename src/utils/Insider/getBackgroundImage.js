import pinkMemo from "../../assets/Pinkmemo.png";
import blueMemo from "../../assets/bluememo.png";
import yellowMemo from "../../assets/Yellowmemo.png";

const getBackgroundImage = (index) => {
  const images = [pinkMemo, blueMemo, yellowMemo];
  return images[index % images.length];
};

export default getBackgroundImage;
