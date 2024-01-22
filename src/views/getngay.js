import React from "react";

class GetNgay extends React.Component {
    state = {
        ngay: ''
    };
    setNgay = () => {
        let day = new Date();
        this.setState({
            ngay: day.toISOString('VN-vi')
        });
    };
    getNgay = () => {
        this.setNgay();
        console.log(this.state)
    }
    render() {
    return (
        <p>{this.state.ngay}</p>
    );
  }
}

export default GetNgay;
