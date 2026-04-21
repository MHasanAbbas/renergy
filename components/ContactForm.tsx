'use client'

import { useState, FormEvent } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: '',
    sector: '',
    disciplines: [] as string[],
    timeline: '',
    budget: '',
    message: '',
    contactMethod: 'email',
    privacy: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleDisciplineChange = (discipline: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplines: prev.disciplines.includes(discipline)
        ? prev.disciplines.filter((d) => d !== discipline)
        : [...prev.disciplines, discipline],
    }))
  }

  const disciplines = [
    'Process Engineering',
    'Technical Safety',
    'Control & Instrumentation',
    'Piping & Plot Planning',
    'Mechanical Static',
    'Mechanical Rotating',
    'Pipeline Engineering',
  ]

  const sectors = [
    'Oil & Gas Processing',
    'Cryogenic (LNG/LPG/NGL)',
    'Refining & Petrochemicals',
    'Storage & Infrastructure',
    'Utilities',
  ]

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
        <h3 className="font-heading font-bold text-2xl text-green-900 mb-2">
          Thank you for your enquiry
        </h3>
        <p className="text-green-700">
          We've received your message and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
          Your Name <span className="text-teal">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
          placeholder="John Smith"
        />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">
          Organization <span className="text-teal">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
          placeholder="Your Company"
        />
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
            Email Address <span className="text-teal">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
            Telephone Number <span className="text-teal">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            placeholder="+968 90 000 000"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-navy mb-2">
          Project Type <span className="text-teal">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
        >
          <option value="">Select project type...</option>
          <option value="feasibility">Feasibility Study</option>
          <option value="feed">FEED Engineering</option>
          <option value="detailed">Detailed Engineering</option>
          <option value="procurement">Procurement Support</option>
          <option value="commissioning">Commissioning Support</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Sector */}
      <div>
        <label htmlFor="sector" className="block text-sm font-semibold text-navy mb-2">
          Primary Sector <span className="text-teal">*</span>
        </label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
        >
          <option value="">Select sector...</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Disciplines */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-3">
          Service Disciplines (Optional)
        </label>
        <div className="space-y-2">
          {disciplines.map((d) => (
            <label key={d} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.disciplines.includes(d)}
                onChange={() => handleDisciplineChange(d)}
                className="w-4 h-4 accent-teal"
              />
              <span className="text-sm text-graphite">{d}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Timeline and Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-2">
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
          >
            <option value="">Select timeline...</option>
            <option value="immediate">Immediate</option>
            <option value="0-3m">0-3 months</option>
            <option value="3-6m">3-6 months</option>
            <option value="6m-1y">6 months - 1 year</option>
            <option value="1y+">1 year+</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-2">
            Project Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
          >
            <option value="">Select range...</option>
            <option value="under-100k">Under $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="500k-1m">$500,000 - $1,000,000</option>
            <option value="over-1m">Over $1,000,000</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Project Description / Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-light-steel rounded-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
          placeholder="Tell us about your project and engineering challenge..."
        />
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-3">
          Preferred Contact Method
        </label>
        <div className="space-y-2">
          {['email', 'phone', 'whatsapp'].map((method) => (
            <label key={method} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleInputChange}
                className="w-4 h-4 accent-teal"
              />
              <span className="text-sm text-graphite capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Privacy Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleInputChange}
            required
            className="w-4 h-4 accent-teal mt-1 flex-shrink-0"
          />
          <span className="text-xs text-graphite">
            I agree to Verdant Engineering's privacy policy and consent to being contacted regarding this enquiry.{' '}
            <span className="text-teal">*</span>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-4 bg-teal hover:bg-teal-dark disabled:opacity-50 text-white font-semibold rounded-sm transition-colors"
        >
          {loading ? 'Sending...' : 'Send Enquiry'}
        </button>
      </div>
    </form>
  )
}
