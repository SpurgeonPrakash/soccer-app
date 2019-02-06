import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Emmanuel Henri" subtitle="Offense: 9 - Defense: 8" />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Passing
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                3
              </Avatar>
              Dribbling
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Shooting
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Marking
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Tackling
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Acceleration
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Top Speed
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              SoccerIQ
          </Chip>
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}