// eslint-disable-next-line import/extensions
import { Location } from './location'

interface Booking {
  dateTime: Date
  location: Location
}

export class Schedule {
  schedule: Booking[]

  constructor(schudule: Booking[]) {
    this.schedule = schudule
  }
}
