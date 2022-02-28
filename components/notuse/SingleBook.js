import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import Container from '@material-ui/core/Container';

class SingleBook extends Component {
    style = {
        fontSize: "12pt",
        padding: "5px 10px"
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getFireData();
    }

    // Firebaseからのデータ取得
    getFireData() {
        var db = firebase.database();
        let ref = db.ref('book/');
        let self = this;
        ref.orderByKey()
            .equalTo(this.props.ID)
            .on('value', (snapshot) => {
                self.setState({
                    data: snapshot.val()
                });
            });
    }

    // データ表示の生成
    getTableData() {
        let result = [];
        if (this.state.data == null || this.state.data.length == 0) {
            return [<tr key="0"><th>loading</th></tr>];
        }
        for (let i in this.state.data) {
            result.push(<div key={ i }>
                { this.state.data[i].title }
                { this.state.data[i].writer }
                { this.state.data[i].note }
                { this.state.data[i].ID }
            </div>);
        }
        return result;
    }

    render() {
        if (this.state.data.length == 0) {
            this.getFireData();
        }
        return (
            <table><tbody>
                { this.getTableData() }
            </tbody></table>
        )
    }
}


export default SingleBook;


