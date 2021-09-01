import React from 'react'
import { InputLogin } from '../../pages/Login/loginStyles'
import { InputProfile, ProfileSelect } from '../../pages/Profile/profileStyle'

const ProfilePessoal = () => {

    return (
        <>
                Nome:
                    <InputProfile type="text" />
                <p>Email:</p> 
                    <InputProfile type="text" />
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