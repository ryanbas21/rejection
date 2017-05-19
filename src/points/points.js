import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export default ({ clearScore, points }) => (
  <Container textAlign={'center'}>
    <Segment padded>
      <div className="points-points-total">Points {points}</div>
      <Button className="points-clear-score" type={'submit'} onClick={clearScore}>
        {'Clear Score'}
      </Button>
    </Segment>
  </Container>
);