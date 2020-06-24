import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import { CreateMessege } from './CreateMessege';
import { MessegeText } from './MessegeText';

export function MessegeRoutes(props){
    return(
    <div>
        <Switch>
            <Route path="/direct" component={CreateMessege} />
            <Route path="/t/:messege" component={MessegeText}/>
            <Route path="/t/:messege" component={MessegeText}/>
        </Switch>
        <button onClick={e=> console.log(props.messege0)}></button>
    </div>)
}