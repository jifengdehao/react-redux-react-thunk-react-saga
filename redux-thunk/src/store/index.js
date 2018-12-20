// Store代码存放的位置
import { createStore, applyMiddleware ,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// 创建数据的公共存储区域
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store