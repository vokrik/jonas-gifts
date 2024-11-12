import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonášovy Vánoce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingPlan />
    </div>
  )
}
