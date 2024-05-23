

export module 'next-auth' {
  interface Session {
    user: {
      id: Number,
      username: string,
    }
  }
}