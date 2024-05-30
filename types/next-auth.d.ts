export module 'next-auth' {
  interface Session {
    user: {
      id: string
      username: string
      email?: string
    }
  }
}

export module 'resend' {
  type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> &
      Partial<Pick<T, Exclude<keyof T, K>>>
  }[keyof T]
  interface Attachment {
    content?: string | Buffer
    filename?: string | false | undefined
    path?: string
  }
  type Tag = {
    name: string
    value: string
  }
  interface EmailRenderOptions {
    react?: React.ReactElement | React.ReactNode | null
    html?: string
    text?: string
  }
  interface CreateEmailBaseOptions extends EmailRenderOptions {
    attachments?: Attachment[]
    bcc?: string | string[]
    cc?: string | string[]
    from: string
    headers?: Record<string, string>
    reply_to?: string | string[]
    subject: string
    tags?: Tag[]
    to: string | string[]
  }
  type CreateEmailOptions = RequireAtLeastOne<EmailRenderOptions> &
    CreateEmailBaseOptions
  interface PostOptions {
    query?: {
      [key: string]: any
    }
  }
  interface CreateEmailRequestOptions extends PostOptions {}
}
