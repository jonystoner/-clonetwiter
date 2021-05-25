import React from 'react';

import Tweet from '../Tweet'

import CloudWord from '../CloudWord'

import { Container, Tab , Tweets } from './Styles';

const Feed: React.FC = () => {
  return(
    <Container>
      <Tab> Tweets </Tab>

     <Tweets> 
        <Tweet/>
     </Tweets>
     <CloudWord/>
     </Container>

  );
}

export default Feed;