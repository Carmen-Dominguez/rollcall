/* eslint-disable import/extensions */
import { Location } from './location'
import { User } from './user'

interface Booking {
  dateTime: Date
  location: Location
}

export class Schedule {
  schedule: Booking[]
  user: User

  constructor(schudule: Booking[], user: User) {
    this.schedule = schudule
    this.user = user
  }
}
