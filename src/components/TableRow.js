import React, { Component } from 'react';

class TableRow extends Component {
    permissionShow = () => {
        if(this.props.permission === "1"){return "Admin"}
        else if(this.props.permission === "2") {return "Moderator"}
        else {return "Normal User"}
    }
    editClick =  () => {
        this.props.editFunClick();
        this.props.changeEditFormClick();
    }
    deleteButtonClick =  (idUser) => {
        this.props.deleteClick(idUser)
    }
    render() {
         return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-warning sua" onClick={() => this.editClick()}  >
                        <i className="fa fa-edit" />
                    </div>
                    <div className="btn btn-danger xoa" onClick={ (idUser) => this.deleteButtonClick(this.props.id)}>
                        <i className="fa fa-trash" />
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;