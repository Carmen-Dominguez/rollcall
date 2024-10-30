import { User } from 'src/models/user'

export class userController {
  users: User[] = []

  // Create
  createUser(user: User) {
    this.users.push(user)
  }

  createUsers(users: User[]) {
    this.users.push(...users)
  }

  // Read
  getAllUsers() {
    return this.users
  }

  getUser(userName: string): User | undefined {
    return this.users.find(u => u.userName === userName)
  }

  // Update
  updateUser(user: any) {
    const updatedUsers = this.users.map(u => {
      if (u.userName === user.userName) {
        return { ...u, ...user }
      } else return u
    })

    // eslint-disable-next-line no-console
    console.log(updatedUsers)
    this.users = updatedUsers
  }

  // Delete
  // deleteUser() {}
}
