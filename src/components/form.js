import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

import './form.css';

class Form extends Component {
	constructor(props) {
    super(props);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmailId = this.setEmailId.bind(this);
    this.setIban = this.setIban.bind(this);
    this.setBankName = this.setBankName.bind(this);
    this.showUser = this.showUser.bind(this);
    this.reset = this.reset.bind(this);
     
     console.log(this.props);

	}

	setFirstName(event) {
    this.props.dispatch(action.setFirstName(event.target.value));
	}

	setLastName(event) {
    this.props.dispatch(action.setLastName(event.target.value));
	}

	setEmailId(event) {
    this.props.dispatch(action.setEmailId(event.target.value));
	}

	setIban(event) {
    this.props.dispatch(action.setIban(event.target.value));
	}

	setBankName(event) {
    this.props.dispatch(action.setBankName(event.target.value));
	}

	showUser(){
		const jsonobj = this.props;
		alert(JSON.stringify(jsonobj));
	}

	reset(){
		this.props.dispatch(action.setFirstName(''));
		this.props.dispatch(action.setLastName(''));
		this.props.dispatch(action.setEmailId(''));
		this.props.dispatch(action.setIban(''));
		this.props.dispatch(action.setBankName(''));
	}

  
  render(){
  	return(
      <div>
          <div id="center">
              <form>
              		<div className="form-group">
				 	  	 <label htmlFor="firstname">First Name:</label>
					   	 <input type="firstname" className="form-control" id="firstname" value={this.props.firstname} onChange={this.setFirstName} required/>
				    </div>

				    <div className="form-group">
				 	  	 <label htmlFor="lastname">Last Name:</label>
					   	 <input type="lastname" className="form-control" id="lastname" value={this.props.lastname} onChange={this.setLastName} required/>
				    </div>

              		<div className="form-group">
				    	<label htmlFor="email">Email address:</label>
				    	<input type="email" className="form-control" id="email" value={this.props.emailid} onChange={this.setEmailId} required/>
				    </div>

				    <div className="form-group">
				 	  	 <label htmlFor="bankacc">IBAN:</label>
				 	  	 <div id="deletebank" className="items">
					   	 <input type="bankacc" className="form-control" id="bankacc" value={this.props.iban} onChange={this.setIban} required/>
				         </div>
				    </div>
                    
                    <div className="form-group">
				 	  	 <label htmlFor="bankname">Bank Name:</label>
					   	 <input type="bankname" className="form-control" id="bankname" value={this.props.bankname} onChange={this.setBankName} required/>
				    </div>

				    <div className="form-group">
				        <div id="buttons" className="items">
				 	  	    <button type="button" class="btn btn-warning" onClick={this.reset}>Clear Input</button>
				 	  	    <button type="button" className="btn btn-success" onClick={this.showUser}>Submit</button>
				   		</div>
				    </div>
              </form>
          </div>
      </div>
  
	)}

}

const mapStateToProps = store => {
  return {
    firstname: store.user.firstname,
    lastname: store.user.lastname,
    emailid: store.user.emailid,
    iban: store.user.iban,
    bankname: store.user.bankname
  }
}

export default connect(mapStateToProps)(Form);