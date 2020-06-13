import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state= {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission,

        }
    }
     isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value; 

        this.setState({
            [name] : value
        });
     }
     saveButtonClick= () => {
         var info = {} ;
         info.id = this.state.id;
         info.name = this.state.name;
         info.tel = this.state.tel;
         info.permission = this.state.permission;

        this.props.changeEditFormClick();
        this.props.getUserEditInfo(info)
     }
    render() {
         return (
          <div className="row">
                    <div className="col">
                        <form>
                            <div className="card text-left mt-2">
                                <div className="card text-white bg-secondary mb-3"  >
                                    <div className="card-header text-center">Edit User</div>
                                    <div className="card-body text-primary">
                                         <div className="form-group">
                                            <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} className="form-control form-control-sm" placeholder="Name" name="name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"  onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel}  className="form-control form-control-sm" placeholder="Phone" name="tel" />
                                        </div>
                                        <div className="form-group">
                                            <select  onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission">
                                                <option >--Choose Role-</option>
                                                <option value={1}>Admin</option>
                                                <option value={2}>Modrator</option>
                                                <option value={3}>Normal</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="reset" className="btn btn-warning btn-block" onClick={()=> this.saveButtonClick()} value="Lưu" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default EditUser;