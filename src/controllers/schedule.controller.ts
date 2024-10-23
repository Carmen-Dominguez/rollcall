/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from 'src/models/user'
import { Booking, Schedule } from 'src/models/schedule'
import { Location } from 'src/models/location'

export class Scheduling {
  schedule: Schedule
  companySchedules?: Schedule[]

  constructor(schedule: Schedule, companySchedules?: Schedule[]) {
    this.schedule = schedule
    this.companySchedules = companySchedules
  }

  // Create schedule
  // create schedule for user (check for seat first, only user can )
  createSchedule(bookings: Booking[], user: User) {
    this.schedule = { bookings, user }
  }

  checkForSeat(date: Date, location: Location): boolean {
    return false
  }

  // Read schedule(s)
  // user get schedule
  getSchedule() {
    return this.schedule
  }

  // get schedules by location and date

  // Update schedule (user can only update their own)
  // user update schedule

  // Delete schedule (user can only delete their own)
  // user delete entire schedule
  deleteSchedule(user: User) {
    this.schedule = { bookings: [], user }
  }

  // user delete some of the schedule by date range
  deleteBookings(user: User, startDate: Date, endDate: Date) {
    this.schedule = { bookings: [], user }
  }
}
