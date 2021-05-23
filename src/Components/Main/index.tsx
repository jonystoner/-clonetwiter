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

const Main: React.FC = () => {
  return(
      <Container>
        <Header>
          <button>
            <BackIcon/>

          </button>
            <Profileinfo>
                <strong> Jonathan </strong>
                <span> 19 Tweets </span>
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
