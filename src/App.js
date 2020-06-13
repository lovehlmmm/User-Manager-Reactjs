import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TableData from './components/TableData';
import AddUser from './components/AddUser';
import DataUser from './data.json';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {

    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser))
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data: temp
      });
    }

  }

  getUserInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(info))

  }
  doiTrangThai = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm })
  }
  changeEditForm = () => {
    this.setState({ editUserStatus: !this.state.editUserStatus })
  }

  deleteFun = (idUser) => {
    var temp = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: temp
    });
    localStorage.setItem('userData', JSON.stringify(temp))
  }
  getNewUserData = (name, tel, permission) => {
    var item = {}
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    items.push(item)
    this.setState({
      data: items
    })
    localStorage.setItem('userData', JSON.stringify(items))
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });

  }

  render() {
    var ketQua = [];

    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketQua.push(item)
      }
    })

    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserInfoApp={(info) => this.getUserInfoApp(info)}
                ketNoi={() => this.doiTrangThai()}
                hienThiNut={this.state.hienThiForm}
                getTextSearch={(dl) => this.getTextSearch(dl)}
                editUserStatus={this.state.editUserStatus}
                changeEditForm={() => this.changeEditForm()}
                userEditObject={this.state.userEditObject}
              />
              <TableData editFun={(user) => this.editUser(user)} dataUserProps={ketQua} changeEditForm={() => this.changeEditForm()} delete={(idUser) => this.deleteFun(idUser)} />
              <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;