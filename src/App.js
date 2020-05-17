import './App.css';
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { sendMoney } from './redux/slices/transferMoney'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      fromName:'',
      toName:'',
      amount:0,
      name_id_mapping:{'Sucheta':0,
    'Pavan':1,
  'Kunal':2,
'Sunny':3},
less_balance:false
      
    }

    

    this.handleSendMoney = this.handleSendMoney.bind(this);
  }

  handleSendMoney(){
    if(this.props.users[this.state.name_id_mapping[this.state.fromName]].balance < this.state.amount){
      this.setState({less_balance:true});
      return
    }else{
      this.setState({less_balance:false});
    }
    this.props.sendMoney({
      fromID:this.state.name_id_mapping[this.state.fromName],
      toID:this.state.name_id_mapping[this.state.toName],
      amount:parseInt(this.state.amount),
      
    })
    


  }

  render(){
    console.log("Props is...")
    console.log(this.props)
    
  return (
    <div className="App">
      <br />
      <h1 className="text-primary mx-auto">Welcome to the Bank Vault</h1>
      <h2 className="text-success mt-5">Latest balances in each account holder :</h2>
      <div className="mt-5">
        <table className="mx-auto border border-dark">
          <thead className="border border-dark">
            <tr>
              <th className="border-right border-dark px-4 bg-warning">Account Holder</th>
              <th className="px-4 bg-warning border-dark">Balance</th>
            </tr>
          </thead>
          <tbody className="border border-dark">
            <tr>
              <td className="border border-dark"><span className="mr-5" >Sucheta</span></td>
              <td className="border border-dark">{this.props.users[0].balance}</td>
            </tr>

            <tr>
              <td className="border border-dark"><span className="mr-5" >Pavan</span></td>
              <td className="border border-dark">{this.props.users[1].balance}</td>
            </tr>


            <tr>
              <td className="border border-dark"><span className="mr-5" >Kunal</span></td>
              <td className="border border-dark">{this.props.users[2].balance}</td>
            </tr>

            <tr>
              <td className="border border-dark"><span className="mr-5" >Sunny</span></td>
              <td className="border border-dark">{this.props.users[3].balance}</td>
            </tr>
            </tbody>
            </table>
      </div>
      <div className='user-inputs mt-5'>
      <input type="text" placeholder="From..." className="mr-4" value={this.state.fromName} onChange={e=>this.setState({fromName:e.target.value,less_balance:false})}></input>
      <input type="text" placeholder="To..." className="mr-4" value={this.state.toName} onChange={e=>this.setState({toName:e.target.value,less_balance:false})}></input>
      <input type="text" placeholder="Amount" className="mr-4" value={this.state.amount} onChange={e=>this.setState({amount:e.target.value})}></input>
      </div>
      <button type='submit' className='mt-4 btn btn-success font-weight-bold' onClick={this.handleSendMoney}>Send</button>
      <button type='submit' className='mt-4 ml-5 btn btn-danger font-weight-bold' onClick={()=>this.setState({fromName:'',toName:'',amount: '',less_balance:false})}>Reset</button>

      { this.state.less_balance ? <p> Sorry {this.state.fromName} does not have enough money in account to do the transfer</p> : <p></p>}
    </div>
  );
}
}

const mapStateToProps = (state) => {
  
  return {
    users:state.sendMoneyReducer,
}
}



export default connect(mapStateToProps,{ sendMoney })(App);