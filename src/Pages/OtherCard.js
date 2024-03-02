import React from "react";

const OtherCard = (props) => {
    return (
        <div style={{ height: 300, maxWidth: 250, backgroundColor: 'white', margin: 30, padding: 10 }}>
            {/* <img src="../img/freshmart.png" height={200} alt="missing" /> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXLL5QjidGqVLBQ3TI31MOQOdOIiHm8MOrw&usqp=CAU" alt="W3Schools.com" />



            <p>{props.desc}</p>
        </div>
    )
}
export default OtherCard;