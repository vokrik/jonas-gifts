import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jonášovi Vánoce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingPlan />
    </div>
  )
}
