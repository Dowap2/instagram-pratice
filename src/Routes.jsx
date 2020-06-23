import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ContentHome } from './ContentHome';
import { DirectMessege } from './DirectMessege';

export function Routes(){
    return(
    <div>
        <Route path="/home" component={ContentHome} />
        <Route path="/direct" component={DirectMessege} />
    </div>)
}