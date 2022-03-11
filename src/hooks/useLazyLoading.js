import { useEffect, useRef } from "react";
import placeHolderImage from "../public/images/placeholder-image.jpg";

export const useNearScreen = (image, options) => {
  const itemRef = useRef(null);

  useEffect(() => {
    // const setImage = (entries, observer) => {
    //   return entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.setAttribute("src", image);
    //     } else {
    //       entry.target.setAttribute("src", placeHolderImage);
    //     }
    //   });
    // };
    // let observer = new IntersectionObserver(setImage, options);
    // observer.observe(itemRef.current);
  });
  return [itemRef];
};
