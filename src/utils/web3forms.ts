export interface ContactPayload {
  name: string
  email: string
  message: string
  subject: string
}

export interface ContactResult {
  ok: boolean
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(payload: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {}

  if (payload.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (payload.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }

  return errors
}

export async function submitContactForm(
  payload: ContactPayload,
  botField: string,
): Promise<ContactResult> {
  if (botField) {
    return { ok: true, message: 'Thanks — your message has been sent.' }
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return {
      ok: false,
      message: 'missing-key',
    }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
      subject: payload.subject,
    }),
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !data.success) {
    return {
      ok: false,
      message: data.message ?? 'Unable to send your message right now.',
    }
  }

  return { ok: true, message: 'Thanks — your message has been sent.' }
}
