import React from 'react';

import Tweet from '../Tweet'

import { Container, Tab , Tweets } from './Styles';

const Feed: React.FC = () => {
  return(
    <Container>
      <Tab> Tweets </Tab>

     <Tweets> 
        <Tweet/>
     </Tweets>
     </Container>

  );
}

export default Feed;