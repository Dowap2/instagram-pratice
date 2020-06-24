import React from 'react';

import {Messege} from './Messege'

import profile from './IMG/profile.jpg'
import send from './ICON/send.png'

export function DirectMessege() {
  return (
    <div>
        <Messege profile={profile} send={send}/>
    </div>
  );
}
