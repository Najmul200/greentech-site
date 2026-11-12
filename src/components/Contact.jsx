import { useState } from 'react';
import { SITE } from '../data/siteData';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); /* TODO: connect to your API / email service */ setSent(true); };
  const field = 'w-full rounded border px-3 py-2 text-sm focus:border-blue-700 focus:outline-none';
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-8">
        <div>
          <h2 id="contact-title" className="text-2xl font-bold text-gray-800 sm:text-3xl">Contact Us</h2>
          <div className="mt-2 h-1 w-16 bg-blue-700" />
          <h3 className="mt-5 text-lg font-semibold text-blue-700">{SITE.name}</h3>
          <address className="mt-3 space-y-2 not-italic text-gray-600">
            <p>Tel: <a className="font-semibold" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
            <p>WhatsApp: <a className="font-semibold" href={`https://wa.me/${SITE.phone.replace(/\D/g, '')}`}>{SITE.phone}</a></p>
            <p>Mailbox: <a className="font-semibold" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>Add: {SITE.address}</p>
          </address>
        </div>
        <form onSubmit={submit} className="min-w-0 space-y-3 rounded-xl bg-white p-4 shadow sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800">Leave a message</h3>
          <label className="block text-sm">Name<input required name="name" className={`${field} mt-1 block`} /></label>
          <label className="block text-sm">Phone / Email<input required name="contact" className={`${field} mt-1 block`} /></label>
          <label className="block text-sm">Message<textarea required name="message" rows="4" className={`${field} mt-1 block`} /></label>
          <button className="rounded bg-blue-700 px-6 py-2 font-semibold text-white hover:bg-blue-800">Submit</button>
          {sent && <p className="text-sm text-green-600" role="status">Thank you! We will contact you soon.</p>}
        </form>
      </div>
    </section>
  );
}
