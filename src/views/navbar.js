import React from "react";
import logo from './logo.png'
class navbar extends React.Component{
    render() {
        return (
            <>
                <div className="learn">
                    <img src={logo} width="150px" />
                </div>
            </>
        )
    }
}

export default navbar;