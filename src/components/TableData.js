import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    mappingDataUser =() => this.props.dataUserProps.map((value,key) => (    
            <TableRow 
            key={key} 
            id={value.id}
             stt={key}
              userName={value.name}
               tel={value.tel}
                permission={value.permission}
             editFunClick={(user) => this.props.editFun(value)}
              changeEditFormClick={() => this.props.changeEditForm()}
              deleteClick={(idUser) => this.props.delete(idUser)}
              />
    ))

    render() {
         return (
          
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Control</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                           {this.mappingDataUser()}
                           
                        </tbody>
                    </table>
                </div>
 
        );
    }
}

export default TableData;