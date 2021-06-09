import React from 'react';
import { withRouter } from 'react-router-dom';
import back from '../Animation/back-arrow.png';


const GoBack = ({ history }) => <img src={back} w='15px' h='15px' onClick={() => history.goBack()} alt="Go back" />;
export default withRouter(GoBack);