import { useId, useState, type FormEvent } from 'react'
import { Check, Copy, LoaderCircle, MapPin, Mail } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import {
  submitContactForm,
  validateContactForm,
} from '../../utils/web3forms.ts'
import { Button } from '../common/Button.tsx'
import { Container } from '../common/Container.tsx'
import { Surface } from '../common/GlowCard.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'
import { SocialLinks } from '../common/SocialLinks.tsx'
import { ResumeActions } from '../common/ResumeActions.tsx'

export function ContactSection() {
  const { contact, personal } = portfolioConfig
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()
  const honeypotId = useId()
  const statusId = useId()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [copied, setCopied] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm({
      name,
      email,
      message,
      subject: contact.form.subject,
    })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    try {
      const result = await submitContactForm(
        { name, email, message, subject: contact.form.subject },
        honeypot,
      )
      if (result.ok) {
        setStatus('success')
        setStatusMessage(contact.form.successMessage)
        setName('')
        setEmail('')
        setMessage('')
      } else if (result.message === 'missing-key') {
        setStatus('error')
        setStatusMessage(contact.form.missingKeyMessage)
      } else {
        setStatus('error')
        setStatusMessage(contact.form.errorMessage)
      }
    } catch {
      setStatus('error')
      setStatusMessage(contact.form.errorMessage)
    }
  }

  async function copyEmail() {
    if (!personal.email) return
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-primary/50'

  return (
    <section id="contact" className="py-[clamp(3rem,8vw,6.5rem)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              number="06"
              label="Contact"
              heading={contact.heading}
              description={contact.description}
            />
            <ul className="mt-8 space-y-4 text-sm">
              {personal.email ? (
                <li className="flex items-center gap-3 text-muted">
                  <Mail className="text-primary size-4" aria-hidden="true" />
                  <a href={`mailto:${personal.email}`} className="text-fg hover:underline">
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex min-h-11 items-center gap-1 text-xs text-muted hover:text-fg"
                  >
                    {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </li>
              ) : null}
              {personal.location ? (
                <li className="flex items-center gap-3 text-muted">
                  <MapPin className="text-primary size-4" aria-hidden="true" />
                  {personal.location}
                </li>
              ) : null}
            </ul>
            <div className="mt-4">
              <SocialLinks />
            </div>
            <ResumeActions className="mt-6" layout="stack" />
          </Reveal>

          <Reveal delay={0.08}>
            <Surface className="p-5 sm:p-7">
              <form onSubmit={onSubmit} noValidate>
                <div className="hidden">
                  <label htmlFor={honeypotId}>Company</label>
                  <input
                    id={honeypotId}
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor={nameId} className="text-sm text-fg">
                    {contact.form.nameLabel}
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${nameId}-error` : undefined}
                  />
                  {errors.name ? (
                    <p id={`${nameId}-error`} className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4">
                  <label htmlFor={emailId} className="text-sm text-fg">
                    {contact.form.emailLabel}
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${emailId}-error` : undefined}
                  />
                  {errors.email ? (
                    <p id={`${emailId}-error`} className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4">
                  <label htmlFor={messageId} className="text-sm text-fg">
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={`${fieldClass} resize-y`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? `${messageId}-error` : undefined}
                  />
                  {errors.message ? (
                    <p id={`${messageId}-error`} className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <LoaderCircle className="size-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    contact.form.submitLabel
                  )}
                </Button>
                <p
                  id={statusId}
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm ${status === 'success' ? 'text-success' : status === 'error' ? 'text-red-400' : 'sr-only'}`}
                >
                  {statusMessage}
                </p>
              </form>
            </Surface>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
