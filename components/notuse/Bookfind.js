import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import InfoCard from '../components/InfoCard';



class Bookfind extends Component {
    style = {
        borderBottom: "1px solid gray"
    }

    // 初期化。ステートとイベント用メソッドの設定
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            data: []
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    // 入力フィールドに入力時の処理
    doChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    // ボタンクリック時の処理
    doAction(e) {
        this.findFireData(this.state.input);
    }

    // 検索の実行
    findFireData(s) {
        let db = firebase.database();
        let ref = db.ref('book/');
        let self = this;
        ref.orderByKey()
            .equalTo(s)
            .on('value', (snapshot) => {
                self.setState({
                    data: snapshot.val()
                });
            });
    }

    // テーブルの内容の作成
    getTableData() {
        let result = [];
        if (this.state.data == null || this.state.data.length == 0) {
            return [<tr key="0"><th>loading</th></tr>];
        }
        for (let i in this.state.data) {
            const note = this.state.data[i].note;
            if (note.length > 30) {
                note = note.substring(0, 30);
            }
            result.push(<div key={ i }>
                <InfoCard title={ this.state.data[i].title } writer={ this.state.data[i].writer } note={ note } link={ "book/" + this.state.data[i].ID } />
            </div>);
        }
        return result;
    }

    // レンダリング
    render() {
        return (<div>
            <input type="text" onChange={ this.doChange }
                style={ this.style } value={ this.state.input } />
            <button onClick={ this.doAction }>Find</button>
            <hr />
            <table><tbody>
                { this.getTableData() }
            </tbody></table>
        </div>)
    }
}


export default Bookfind;