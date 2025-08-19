import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonášovy Narozeniny</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingPlan />
    </div>
  )
}
