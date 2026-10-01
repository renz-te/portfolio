import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const object = Object.fromEntries(formData)
    object.access_key = '71353111-0567-4e3e-b0ca-7f805e8adb28'
    const json = JSON.stringify(object)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const responseJson = await res.json()

      if (res.status === 200) {
        console.log('Success:', responseJson)
        form.reset()
        setIsOpen(false)
        setToastVisible(true)
        setTimeout(() => setToastVisible(false), 3500)
      } else {
        console.log('Error:', responseJson)
      }
    } catch (error) {
      console.log('Catch Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      {/* Form Panel */}
      <div
        className={`mb-4 overflow-hidden transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[calc(100vw-3rem)] sm:w-80 bg-primary-bg/95 backdrop-blur-xl border border-primary-accent/20 shadow-2xl rounded-2xl overflow-hidden shadow-primary-accent/10">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-secondary-bg/80 border-b border-primary-accent/10">
            <h3 className="font-bold text-light-text text-sm">Send a Message</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-text hover:text-primary-accent transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-5"
          >
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary-bg/60 border border-primary-accent/10 text-light-text text-sm placeholder:text-muted-text/50 focus:outline-none focus:border-primary-accent/40 focus:ring-1 focus:ring-primary-accent/20 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary-bg/60 border border-primary-accent/10 text-light-text text-sm placeholder:text-muted-text/50 focus:outline-none focus:border-primary-accent/40 focus:ring-1 focus:ring-primary-accent/20 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary-bg/60 border border-primary-accent/10 text-light-text text-sm placeholder:text-muted-text/50 focus:outline-none focus:border-primary-accent/40 focus:ring-1 focus:ring-primary-accent/20 transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-primary-accent/30 transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
                {!isSubmitting && <Send size={14} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`absolute bottom-[100%] right-0 mb-6 w-max px-5 py-3 rounded-xl bg-green-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-green-500/25 transition-all duration-500 ease-out origin-bottom-right ${
          toastVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        Message sent successfully!
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent flex items-center justify-center text-white shadow-lg shadow-primary-accent/30 hover:shadow-primary-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer pointer-events-auto"
        aria-label="Toggle contact form"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
