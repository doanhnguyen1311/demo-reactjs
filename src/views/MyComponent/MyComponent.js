import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component{
    
    
    // state = {
    //     name: 'Doanh',
    //     channel: 'Doanh IT'
    // }
    /*
    Muốn xài onclick thì phải dùng arrow function
    JSX luôn trả về 1 khối, nếu muốn in ra 2 div thì phải sử dụng dấu <> </>
    trong này không có khải niệm class chỉ có className
    */
    // change = (event) => {
    //     // merge
    //     // this.state.name = event.target.value ---> bad code
    //     this.setState({
    //         name: event.target.value,
    //         channel: 'abc'
    //     });
    // }

    // handleClickButton = () => {
    //     alert('click me');
    // }

    state = {
        firstName : '',
        lastName : ''
    }
    handleChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handlelastChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data: ', this.state)
    }
    render() {
        return (
            <>
                {/* <div className="mot">
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.change(event)}
                    />
                    Hello {this.state.name} component Nguyen Van Doanh</div>
                <div className="hai">My youtube channel : {this.state.channel}</div>
                <div className="ba">
                    <button onClick={()=> this.handleClickButton()}>Click me</button>
                </div> */}
                <div>Hello html form</div>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" value={this.state.firstName}
                    onChange={(event) => this.handleChange(event)}
                /><br />
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" value={this.state.lastName}
                    onChange={(event) => this.handlelastChange(event)}
                /><br /><br />
                <input type="button" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />

                <ChildComponent
                name={'Doanh'}
                age ={'25'}
                
                />
            </>
        );
}
}
export default MyComponent;