import React from 'react'
import { toast } from 'react-toastify';
import { InputProfile, ProfileSelect } from '../../pages/Profile/profileStyle'

const ProfilePessoal = () => {

    const [fieldValueName, setFieldValueName] = React.useState('');
    const [fieldValueEmail, setFieldValueEmail] = React.useState('');

    const handleBlurName = (e) => {
        setFieldValueName(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar seu nome ou username!')  
        }
       
    console.log(fieldValueName);
}

    const handleBlurEmail = (e) => {
        setFieldValueEmail(e.target.value);
        if (e.target.value === null || e.target.value === undefined || e.target.value === '' ){
            toast.error('Voce precisa colocar o seu Email!') 
        }
       
    console.log(fieldValueEmail);
}


    return (
        <>
                Nome:
                    <InputProfile type="text" onBlur={handleBlurName}/>
                <p>Email:</p> 
                    <InputProfile type="text" onBlur={handleBlurEmail}/>
                <p>Categorias Favoritas:</p>
                    <ProfileSelect name="select" >
                        <option value="valor1">Açao</option>
                        <option value="valor2" selected>Terror</option>
                        <option value="valor3">Infantil</option>
                        <option value="valor2" selected>Comédia</option>
                        <option value="valor3">Documentários</option>
                    </ProfileSelect>
                <p>Data de Nascimento: </p> 
                 <InputProfile type="date" />   
                
        </>
    )
}

export default ProfilePessoal