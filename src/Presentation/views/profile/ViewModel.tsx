import React, {useContext, useState} from 'react'
import { Context } from '../../Context/Context';


const ViewModel = () => {

    const {user, signOff} = useContext(Context);

    return {
      user,
      signOff
    }
}

export default ViewModel;
