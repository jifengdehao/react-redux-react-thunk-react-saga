import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  
  constructor(props) {
    super(props)
    this.state = store.getState() // 获取state
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) //store 改变重新获取state 
  }

  render () {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
  // input change
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  // store 订阅
  handleStoreChange() {
    this.setState(store.getState())
  }
  // 添加 item
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  //删除 item
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList