import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import InfoCard from '../components/InfoCard';



class Bookdata extends Component {
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
            .limitToFirst(this.props.number)
            .on('value', (snapshot) => {
                self.setState({
                    data: snapshot.val()
                });
            });
    }

    handleClick(letter) {
        this.setState({ justClicked: letter });
        console.log(letter);
    }
    // データ表示の生成
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
                <InfoCard title={ this.state.data[i].title } writer={ this.state.data[i].writer } note={ note } link={ "single-book" } />
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


export default Bookdata;


