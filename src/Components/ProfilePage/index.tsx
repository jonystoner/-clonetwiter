import React from 'react';

import Feed from '../Feed'

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  Location,
  CokeIcon,
  Followage
}from './Styles';

const ProfilePage: React.FC = () => {
  return(
  <Container>
    <Banner>
      <Avatar>

      </Avatar>
    </Banner>
    <ProfileData>
      <EditButton outlined> Editar Perfil </EditButton>

        <h1> Jonathan stoner fullstack </h1>
        <h2> @jonathan_stoner_fullstack </h2>
        <p>
           fullstack at <a href="https://github.com/jonystoner"> @jonystoner </a>
        </p>

        <ul>
        <li>
          <Location/>
          Sao Paulo, Brasil
        </li>
          <CokeIcon/>
            Nascido(a) em 27 de setembro 
        </ul>

          <Followage>
            <span>
              Seguindo <strong>1200</strong>
            </span>
            <span>
              <strong> ,1200</strong>  seguidores       
            </span>
          </Followage>


    </ProfileData>
    <Feed/>
  </Container>
  )
}

export default ProfilePage;
