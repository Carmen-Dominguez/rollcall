/* eslint-disable import/extensions */
import { Location } from './location'
import { User } from './user'

export interface Booking {
  dateTime: Date
  location: Location
}

export class Schedule {
  bookings: Booking[]
  user: User

  constructor(bookings: Booking[], user: User) {
    this.bookings = bookings
    this.user = user
  }
}
