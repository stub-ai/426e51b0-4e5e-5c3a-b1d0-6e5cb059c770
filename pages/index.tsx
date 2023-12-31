import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    price: '10',
    features: ['1 GB Storage', '10,000 Requests', '24/7 Support']
  },
  {
    name: 'Pro',
    price: '20',
    features: ['10 GB Storage', '100,000 Requests', 'Priority Support']
  },
  {
    name: 'Enterprise',
    price: '50',
    features: ['Unlimited Storage', 'Unlimited Requests', 'Dedicated Support']
  }
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-10">Our Pricing Plans</h1>
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}