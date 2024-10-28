export class Location {
  name: string
  seats?: number

  constructor(name: string, seats?: number) {
    this.name = name
    this.seats = seats
  }
}
