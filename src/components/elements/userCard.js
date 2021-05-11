import React from 'react';
import '../../assets/css/user.css'
export default class UserCard extends React.Component {
    render(){
      return (
        
        <div className="col-md-4">
    		    <div className="card profile-card-3">
    		        <div className="background-block">
    		            <img src={this.props.header} alt="profile-sample1" className="background"/>
    		        </div>
    		        <div className="profile-thumb-block">
    		            <img src={this.props.profile} alt="profile-image" className="profile"/>
    		        </div>
    		        <div className="card-content">
                    <h2 className="card-title">{this.props.name}<small>{this.props.position}</small></h2>
                    <div className="icon-block"><a href={this.props.emaillink}><i className="fa fa-envelope email"></i></a><a href={this.props.phonelink}> <i className="fa fa-phone phone"></i></a><a href={this.props.linkedin}> <i className="fa fa-linkedin linkedin"></i></a></div>
                    </div>
                </div>
    		</div>
      );
    }
  }
