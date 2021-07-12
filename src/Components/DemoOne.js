import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
import { useState } from "react";
import Img1 from '../Img/empire-state-building (1).png';
import Img2 from '../Img/empire-state-building.png';
import Img3 from '../Img/sphinx.png';
import Img4 from '../Img/statue-of-liberty.png';


const DemoOne = () => {
    const [dataOne, setDataOne] = useState('This is Header')
    const [dataTwo, setDataTwo] = useState('watch input value by passing the name of it')
    const [img, setImg] = useState(Img1)
    const [bgColor, setBgColor] = useState("#FF9300")


    const handleOnChangeText1 = (e) => {
        setDataOne(e.target.value)
    }
    const handleOnChangeText2 = (e) => {
        setDataTwo(e.target.value)
    }
    // --------Image----

    const handleOnClickImg1 = () => {
        setImg(Img1)
    }
    const handleOnClickImg2 = () => {
        setImg(Img2)
    }
    const handleOnClickImg3 = () => {
        setImg(Img3)
    }
    const handleOnClickImg4 = () => {
        setImg(Img4)
    }
    // ----------Btn-------
    const handleOnClickBtnColorOrange = () => {
        setBgColor("#FF9300")
    }
    const handleOnClickBtnColorBlue = () => {
        setBgColor("#00A2FF")
    }

    return (
        <div className="main-cont">
            <div className="template">
                <DraggableButtonInCard text={dataTwo} bgColor={bgColor} head={dataOne} img={img} />
                {/* <DraggableButtonInCard text="Drop" bgColor="#00A2FF" /> */}
            </div>

            <div>
                <p>Image: Click to drag and click to drop</p>
                <Typography variant="h6">Text-1</Typography>
                <input onChange={handleOnChangeText1} type="text" />
                <Typography variant="h6">Text-2</Typography>
                <input onChange={handleOnChangeText2} type="text" />
                <div className="btn-color">
                    <Typography variant="h6">Color</Typography>
                    <Button onClick={handleOnClickBtnColorOrange} style={{ backgroundColor: '#FF9300', color: '#FFFFFF' }} variant="contained" >Dark Orange</Button>
                    <Button onClick={handleOnClickBtnColorBlue} style={{ backgroundColor: '#00A2FF', color: '#FFFFFF' }} variant="contained" color="primary">Cyan Blue</Button>

                </div>

                <div className="img-template">
                    <img onClick={handleOnClickImg1} width="100px" src={Img1} alt="" />
                    <img onClick={handleOnClickImg2} width="100px" src={Img2} alt="" />
                    <img onClick={handleOnClickImg3} width="100px" src={Img3} alt="" />
                    <img onClick={handleOnClickImg4} width="100px" src={Img4} alt="" />
                </div>
            </div>

        </div>
    );
};

//  const DraggableCard = ({ text, bgColor }) => {
//     return (
//       <Draggable>
//         <Card
//           style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}
//         >
//           <Button variant="text">BUY</Button>
//           <Typography variant="h6">{text}</Typography>
//         </Card>
//       </Draggable>
//     );
//   };


const DraggableButtonInCard = ({ text, bgColor, head, img }) => {
    return (
        <Card style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff", padding: "30px" }}>
            <Draggable>
                <img style={{ width: "300px" }} src={img} alt="" />
            </Draggable>
            <br />
            <Draggable>
                <Button variant="text">{head}</Button>
            </Draggable>
            <Draggable>
                <Typography variant="h6">{text}</Typography>
            </Draggable>

        </Card>
    );
};


export default DemoOne;