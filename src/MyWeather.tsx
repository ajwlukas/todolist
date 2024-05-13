import React, { Component } from "react";

interface MyProps{
    weather : string;
    children : React.ReactNode;
    test : string;
}

// const MyWeather : React.FC<MyProps>  = ({children, weather, test})=>{

//     return (
//         <div>
//             {children}<p></p>
//             오늘의 날씨는 {weather}입니다. {test}
//         </div>
//     )
// }

//클래스형
class MyWeather extends Component<MyProps>  
{

    render(){
        const {children, weather, test} = this.props;

        return (
            <div>
                {children}<p></p>
                오늘의 날씨는 {weather}입니다. {test}
            </div>
        )
    }

}
export default MyWeather;