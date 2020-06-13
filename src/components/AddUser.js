import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name ,value)
        this.setState({
            [name]: value
        });

        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;


    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>

                        <div className="card text-left mt-2">
                            <div className="card border-primary mb-3"  >
                                <div className="card-header">Create</div>
                                <div className="card-body text-primary">
                                    <h5 className="card-title">User Name</h5>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control form-control-sm" placeholder="Name" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control form-control-sm" placeholder="Phone" name="tel" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)}>
                                            <option value>--Choose Role-</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="reset" className="btn btn-primary btn-block" onClick={(name, tel, permission) =>
                                            this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Create" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form> 
                </div>

            )
        }
    }

    render() {
        return (
            <div >

                {this.kiemTraTrangThai()}

            </div>

        );
    }
}

export default AddUser;