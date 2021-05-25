import React from 'react';

import Main from '../Main';



import { Container, Wrapper } from './Styles';

function Layout() {
  return (

    <Container> 
      <Wrapper>
        {/*<Menubar>*/} 
          {/*<Sidebar>
             {/* </Sidebar>*/} 
             {/* </Menubar>  */} 
             <Main />
         </Wrapper>  
    </Container>
    

  )


}

export default Layout;