import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Court Marriage Professional',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-background text-foreground flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl text-center">
        <div className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-5">404</div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">Page not found</h1>
        <p className="text-foreground/70 text-lg leading-relaxed mb-8">The page you requested does not exist or may have moved. Use the main service pages below to continue.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="rounded-xl bg-gold px-7 py-4 text-black font-black hover:bg-gold-dark transition-colors">Go to Home</Link>
          <Link href="/services/court-marriage" className="rounded-xl border border-gold/40 px-7 py-4 font-black hover:bg-gold/10 transition-colors">Court Marriage Services</Link>
          <Link href="/services/online-nikah" className="rounded-xl border border-gold/40 px-7 py-4 font-black hover:bg-gold/10 transition-colors">Online Nikah</Link>
        </div>
      </div>
    </div>
  )
}
