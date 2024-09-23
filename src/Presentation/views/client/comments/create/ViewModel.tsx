import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Context/Context';
import { HotelContext } from '../../../../Context/HotelContext';
import { CreateComment } from '../../../../../Domain/useCase/comments/CreateComment';

const ViewModel = () => {
    const [responseMessage, setResponseMessage] = useState('');
    const [values, setValues] = useState({
        comment: '',
        id_user: '',
        id_hotel: 2
    });
    const { user } = useContext(Context);
    //const { hotelId } = useContext(HotelContext);

    useEffect(() => {
        if (user.id !== '') {
            onChange('id_user', user.id!)
        }
    }, [user]);

    /*useEffect(() => {
        if (hotelId !== '') {
            onChangeIds(values.id_user, hotelId);
        }
    }, [hotelId]);*/

    const onChange = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    };

    const onChangeIds = (id_user: string, id_hotel: number) => {
        setValues({ ...values, id_user: id_user, id_hotel: id_hotel });
    };

    const createCom = async () => {
        const response = await CreateComment(values);
        setResponseMessage(response.message);
        resetForm();
    };

    const resetForm = () => {
        setValues({
            ...values,
            comment: '',
            id_user: user.id!,
            //id_hotel: hotelId
        });
    };

    return {
        ...values,
        onChange,
        responseMessage,
        createCom
    };
};

export default ViewModel;
