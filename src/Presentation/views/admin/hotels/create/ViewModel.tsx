import React, { useContext, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { HotelContext } from '../../../../Context/HotelContext';

const ViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        phone: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        street: '',
        colony: '', 
        lat: 0.0,
        lng: 0.0,
        refpoint: ''
    })
    const [image1, setImage1] = useState<ImagePicker.ImagePickerAsset>();
    const [image2, setImage2] = useState<ImagePicker.ImagePickerAsset>();
    const [image3, setImage3] = useState<ImagePicker.ImagePickerAsset>();
    const [image4, setImage4] = useState<ImagePicker.ImagePickerAsset>();
    const {create} = useContext(HotelContext);
    const [responseMessage, setResponseMessage] = useState('');

    const pickImage = async (numImg: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
            if(numImg == 1){
                onChange('image1', result.assets[0].uri);
                setImage1(result.assets[0]);
            }
            else if(numImg == 2){
                onChange('image2', result.assets[0].uri);
                setImage2(result.assets[0]);
            }
            else if(numImg == 3){
                onChange('image3', result.assets[0].uri);
                setImage3(result.assets[0]);
            }
            else if(numImg == 4){
                onChange('image4', result.assets[0].uri);
                setImage4(result.assets[0]);
            }  
        }
      };

      const takPhoto = async (numImg: number) => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
            if(numImg == 1){
                onChange('image1', result.assets[0].uri);
                setImage1(result.assets[0]);
            }
            else if(numImg == 2){
                onChange('image2', result.assets[0].uri);
                setImage2(result.assets[0]);
            }
            else if(numImg == 3){
                onChange('image3', result.assets[0].uri);
                setImage3(result.assets[0]);
            }
            else if(numImg == 4){
                onChange('image4', result.assets[0].uri);
                setImage4(result.assets[0]);
            } 
        }
      };

    const onChange = (property: string, value: any) => {
        console.log(`Changing ${property} to ${value}`);
        setValues({...values, [property]: value});
    }

    const onChangeRefPoint = (refpoint: string, lat: number, lng:number) => {
        setValues({...values, refpoint: refpoint, lat: lat, lng: lng})
    }

    const createHotel = async () => {
        console.log('Hotel: ' + JSON.stringify(values));
        let files=[];
        files.push(image1!);
        files.push(image2!);
        files.push(image3!);
        files.push(image4!);
        const response = await create(values, files);
        setResponseMessage(response.message);
        if(response.success){
            resetForm();
        }
        
    }

    const resetForm = async () => {
        setValues({
        name: '',
        description: '',
        phone: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        street: '',
        colony: '',
        lat: 0.0,
        lng: 0.0,
        refpoint: ''
        })
    }

    return {
        ...values,
        onChange,
        pickImage,
        takPhoto,
        onChangeRefPoint,
        createHotel
    }
}

export default ViewModel
