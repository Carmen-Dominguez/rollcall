/* eslint-disable @typescript-eslint/no-unused-vars */
import { Location } from 'src/models/location'

export class LocationController {
  locations: Location[] = []

  // C
  createLocation(location: Location) {
    this.locations.push(location)
  }

  // R
  getSeats(name: string): 0 {
    return 0
  }

  getAllLocations() {
    return this.locations
  }

  // U
  updateLocation(name: string, seats: number) {
    const n = name
  }

  // D
}
