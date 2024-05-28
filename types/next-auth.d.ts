

export module 'next-auth' {
  interface Session {
    user: {
      id: string,
      username: string,
      email: string,
    }
  }
}