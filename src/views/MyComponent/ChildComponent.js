import React from "react";
class ChildComponent extends React.Component{
    render() {
        console.log('check props: ', this.props)
        let name = this.props.name;
        let age = this.props.age;
        return (
            <>
                <div>ChildComponent: {name}</div>
                <div>Age: {age}</div>
            </>
        );
}
}
export default ChildComponent;