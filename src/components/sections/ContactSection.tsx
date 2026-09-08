import { useId, useState, type FormEvent } from 'react'
import {
  Check,
  Clock,
  Copy,
  Globe2,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import {
  submitContactForm,
  validateContactForm,
} from '../../utils/web3forms.ts'
import { Button } from '../common/Button.tsx'
import { Container } from '../common/Container.tsx'
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
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

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
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      setCopiedEmail(false)
    }
  }

  async function copyPhone() {
    if (!personal.phone) return
    try {
      await navigator.clipboard.writeText(personal.phone)
      setCopiedPhone(true)
      window.setTimeout(() => setCopiedPhone(false), 2000)
    } catch {
      setCopiedPhone(false)
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-line bg-background/80 px-4 py-3 text-sm text-fg outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-background'

  return (
    <section id="contact" className="relative py-[clamp(3.5rem,8vw,7rem)] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -bottom-24 right-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_5%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Direct Info & Availability */}
          <Reveal>
            <SectionHeader
              number="06"
              label="Contact"
              heading={contact.heading}
              description={contact.description}
            />

            {/* Availability & Trust Chips */}
            <div className="mt-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>Open for Full-Time & High-Impact Contracts</span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface/70 px-3 py-1.5">
                  <Clock className="size-3 text-primary" aria-hidden="true" />
                  Response time: &lt; 24 hours
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface/70 px-3 py-1.5">
                  <Globe2 className="size-3 text-secondary" aria-hidden="true" />
                  Remote & Worldwide
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3">
              {personal.email && (
                <div className="group flex items-center justify-between rounded-xl border border-line bg-surface/70 p-3.5 backdrop-blur-sm transition-colors hover:border-line/90 hover:bg-surface/90">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Mail className="size-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="truncate text-xs sm:text-sm font-medium text-fg hover:text-primary transition-colors block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 rounded-lg border border-line bg-surface-secondary px-2.5 py-1.5 text-xs text-muted hover:text-fg hover:border-line/90 transition-all shrink-0 ml-2"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {personal.phone && (
                <div className="group flex items-center justify-between rounded-xl border border-line bg-surface/70 p-3.5 backdrop-blur-sm transition-colors hover:border-line/90 hover:bg-surface/90">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-secondary text-primary">
                      <Phone className="size-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
                        Phone / WhatsApp
                      </p>
                      <a
                        href={`tel:${personal.phone}`}
                        className="truncate text-xs sm:text-sm font-medium text-fg hover:text-primary transition-colors block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="inline-flex items-center gap-1 rounded-lg border border-line bg-surface-secondary px-2.5 py-1.5 text-xs text-muted hover:text-fg hover:border-line/90 transition-all shrink-0 ml-2"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {personal.location && (
                <div className="flex items-center gap-3 rounded-xl border border-line bg-surface/70 p-3.5 backdrop-blur-sm">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-secondary text-secondary">
                    <MapPin className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-fg">
                      {personal.location} · Open to relocation
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links & Resume */}
            <div className="mt-8 pt-6 border-t border-line/60">
              <p className="font-mono text-xs uppercase tracking-wider text-muted/70 mb-3">
                Connect Directly
              </p>
              <SocialLinks />
              <ResumeActions className="mt-6" layout="stack" />
            </div>
          </Reveal>

          {/* Right Column: High-End Message Form */}
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border border-line bg-surface/85 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-all hover:border-line/90">
              <div className="flex items-center gap-2.5 pb-5 border-b border-line/60 mb-6">
                <Sparkles className="size-4 text-primary" aria-hidden="true" />
                <h3 className="text-base font-semibold text-fg">
                  Send a Direct Message
                </h3>
              </div>

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
                  <label htmlFor={nameId} className="text-xs sm:text-sm font-medium text-fg">
                    {contact.form.nameLabel}
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
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

                <div className="mt-5">
                  <label htmlFor={emailId} className="text-xs sm:text-sm font-medium text-fg">
                    {contact.form.emailLabel}
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
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

                <div className="mt-5">
                  <label htmlFor={messageId} className="text-xs sm:text-sm font-medium text-fg">
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, or open role..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={`${fieldClass} resize-y min-h-[120px]`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? `${messageId}-error` : undefined}
                  />
                  {errors.message ? (
                    <p id={`${messageId}-error`} className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <LoaderCircle className="size-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>{contact.form.submitLabel}</span>
                        <Send className="size-3.5 ml-1" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-muted/70 font-mono">
                    Protected by spam filtering
                  </p>
                </div>

                <p
                  id={statusId}
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm font-medium ${
                    status === 'success'
                      ? 'text-emerald-400'
                      : status === 'error'
                        ? 'text-red-400'
                        : 'sr-only'
                  }`}
                >
                  {statusMessage}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
