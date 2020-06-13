import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            userObj : {}
        }
    }

    hienThiNut = () => {
        if (this.props.hienThiNut === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Close</div>

        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >Create User</div>

        }
    }
    getText = (event) => {
        this.setState({
            searchText: event.target.value
        });
        this.props.getTextSearch(event.target.value)
    }

    getUserEditInfo =  (info) => {
        this.setState({
            userObj : info
        });
         this.props.getUserInfoApp(info);
    }
    isShowEditForm =  () => {
         if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo={ (info) => this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditFormClick={() => this.props.changeEditForm()}
            />
        }
    }


    render() {
        return (

            <div className="col-12">
               {
                   this.isShowEditForm()
               }
                <div className="form-group">
                    <input type="text" name="fSearch" className="form-control" onChange={(event) => this.getText(event)} placeholder="Nhập tên cần tìm..." />
                    {/* <div className="btn btn-info btn-block" onClick={ (dl) => this.props.getTextSearch(this.state.searchText)}> Tìm </div> */}
                </div>

                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-8">
                        </div>
                        <div className="form-group col-md-4">
                            {this.hienThiNut()}
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default Search;