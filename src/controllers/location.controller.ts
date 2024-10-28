/* eslint-disable @typescript-eslint/no-unused-vars */
import { Location } from 'src/models/location'

export class LocationController {
  locations: Location[] = []

  // C
  createLocation(location: Location) {
    this.locations.push(location)
  }

  isLocation(l: Location): l is Location {
    return (
      l !== null &&
      typeof l === 'object' &&
      typeof l.name === 'string' &&
      (l.seats === undefined || typeof l.seats === 'number')
    )
  }

  // R
  getSeats(name: string): 0 {
    return 0
  }

  getAllLocations() {
    return this.locations
  }

  getLocation(name: string): Location | undefined {
    return this.locations.find(l => l.name == name)
  }

  // U
  updateLocation(name: string, seats: number) {
    const n = name
  }

  // D
  // deleteLocation(location: Location) {

  // }

  // deleteAllLocations(location: Location) {

  // }
}
