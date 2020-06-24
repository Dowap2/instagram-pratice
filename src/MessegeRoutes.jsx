import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CreateMessege } from './CreateMessege';
import { MessegeText } from './MessegeText';

export function MessegeRoutes(){
    return(
    <div>
        <Route path="/direct" component={CreateMessege} />
        <Route path="/t/01" component={MessegeText} />
    </div>)
}