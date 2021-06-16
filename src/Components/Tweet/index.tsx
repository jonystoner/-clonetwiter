import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './Styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Stoner</strong>
            <span>@Stoner</span>
            <Dot />
            <time>16 de junho </time>
          </Header>

          <Description>Novos Tweets </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              54
            </Status>
            <Status>
              <RetweetIcon />
              45
            </Status>
            <Status>
              <LikeIcon />
              454
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    
    
  );
};

export default Tweet;