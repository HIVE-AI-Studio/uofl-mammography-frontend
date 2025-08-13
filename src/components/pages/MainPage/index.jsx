import React, { useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import { ImageService } from "../../../services/ImageService";

function MainPage(){
    const [img, setImg] = useState(null);

    const updateImg = (image, email) => {
      setImg(image);
      // console.log("Imagen fue cargada");
      // console.log(image);
      ImageService.sendImgPOST(image, email)
      .then((data)=>{
        if (data.status !== 200){
          console.warn(data);
        }
      })
      .catch((e)=>{
        alert("An error has occurred: " + (e.message || e));
      });
    }

    useEffect(()=>{
    }, []);
    return (
        <MainTemplate img={img} updateImg={updateImg}/>
    );
  }

export default MainPage;
