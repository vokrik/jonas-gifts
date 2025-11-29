import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";
import {useEventData} from "../hooks/useEventData";

export default function Home() {
  const {data, isPending, isFetching} = useEventData()
  if (isPending || isFetching) return <div>Loading</div>
  return (
    <div>
      <Head>
        <title>{data.eventTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricingPlan eventTitle={data.eventTitle} pages={data.pages} />
    </div>
  )
}
