import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { ContentHome } from './ContentHome';
import { DirectMessege } from './DirectMessege';
import { DetailPost } from './DetailPost'
import { NotFound } from './NotFound'

export function Routes(){
    return(
    <div>
        <Switch>
            <Route path="/home" component={ContentHome} />
            <Route path="/direct" component={DirectMessege} />
            <Route path="/p" component={DetailPost} />
            <Route component={NotFound} />
        </Switch>
    </div>)
}