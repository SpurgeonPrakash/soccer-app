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
    const player = this.props.player;
    const offence = player.dribbling + player.passing;
    const defence = player.marking + player.tackling;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offence: ${offence} - Defense: ${defence}`} />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.passing}
                </Avatar>
                Passing
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.dribbling}
                </Avatar>
                Dribbling
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.shooting}
                </Avatar>
                Shooting
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.marking}
                </Avatar>
                Marking
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.tackling}
                </Avatar>
                Tackling
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.acceleration}
                </Avatar>
                Acceleration
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.topSpeed}
                </Avatar>
                Top Speed
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  {player.soccerIQ}
                </Avatar>
                SoccerIQ
            </Chip>
          </div>
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}
