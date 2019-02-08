import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Players = new Mongo.Collection('players');

Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  passing: { type: Number, defaultValue: 0 },
  dribbling: { type: Number, defaultValue: 0 },
  shooting: { type: Number, defaultValue: 0 },
  marking: { type: Number, defaultValue: 0 },
  tackling: { type: Number, defaultValue: 0 },
  acceleration: { type: Number, defaultValue: 0 },
  topSpeed: { type: Number, defaultValue: 0 },
  soccerIQ: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true },
  owner: { type: String },
});

Players.attachSchema(PlayerSchema);
