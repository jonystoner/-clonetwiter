import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  Profileinfo,
  BottonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './Styles';

function Main() {
  return(
      <Container>
        <Header>
          <button>
            <BackIcon/>

          </button>
            <Profileinfo>
                <strong> Jonathan </strong>
                <spam> 9 Mensagens </spam>
            </Profileinfo>
        </Header>

          <ProfilePage/>

            <BottonMenu>
            <HomeIcon className='active'/>
              <SearchIcon/>
              <BellIcon/>
              <EmailIcon/>  
          </BottonMenu>
      </Container>
  )
}

export default Main;
