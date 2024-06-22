import React from 'react'

const About = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-900/15 px-3 py-1 text-base">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Acme Crypto Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse and talented team is dedicated to building the future of decentralized finance. Get to
                  know the individuals behind Acme Crypto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" width="120" height="120" alt="Team Member" className="rounded-full" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" width="120" height="120" alt="Team Member" className="rounded-full" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Co-Founder & CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" width="120" height="120" alt="Team Member" className="rounded-full" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Head of Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-500/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-900/15 px-3 py-1 text-base">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Guiding Principles at Acme Crypto</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values shape the way we operate and the impact we strive to make in the world of
                  decentralized finance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <InfinityIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-muted-foreground">
                    We are committed to honesty, transparency, and ethical practices in all that we do.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <InfoIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously push the boundaries of what's possible in the world of decentralized finance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <GroupIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    We believe in empowering and supporting our global community of users and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-900/15 px-3 py-1 text-base">Milestones</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Crypto has reached several significant milestones on our journey to revolutionize the future of
                  finance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <UsersIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">1M+ Users</h3>
                  <p className="text-muted-foreground">Acme Crypto has reached over 1 million users worldwide.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSignIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">$1B+ Transacted</h3>
                  <p className="text-muted-foreground">Our platform has facilitated over $1 billion in transactions.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                  <AwardIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Industry Awards</h3>
                  <p className="text-muted-foreground">Recognized as a leading innovator in the crypto space.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

function InfinityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  )
}
function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}
function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}

export default About