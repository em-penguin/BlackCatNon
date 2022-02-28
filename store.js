import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";


var config = {
    apiKey: "AIzaSyClGRgW4Q4SNzGKXdm0yPNyvUy4OG8Fjc8",
    authDomain: "mybook-438ed.firebaseapp.com",
    databaseURL: "https://mybook-438ed.firebaseio.com",
    projectId: "mybook-438ed",
    storageBucket: "mybook-438ed.appspot.com",
    messagingSenderId: "887601195721",
    appId: "1:887601195721:web:7c831a124d67ec42b0bb18"
};
var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;
// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = intitial, action) {
    switch (action.type) {
        // ダミー
        case 'TESTACTION':
            return state;
        // デフォルト
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state,
        applyMiddleware(thunkMiddleware))
}
