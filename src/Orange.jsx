import React from "react";
function Without() {
    return React.createElement(
        "div",null,
        React.createElement(
            "h1",null,"Hello",
            React.createElement("i", null, " shalini " ),
            React.createElement("span",{style:{color:"green"}}, "from institute"), 
            " hyderabad"       
        ),
        React.createElement("img",
            {src:"https://images.pexels.com/photos/30150599/pexels-photo-30150599/free-photo-of-thoughtful-woman-in-urban-black-and-white-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt:"image", width:"300"}

        )
)

}

export default Without

