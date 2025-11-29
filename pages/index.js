import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";
import ProductsPage from "@components/ProductsPage";
import {useEventData} from "../hooks/useEventData";
import React from "react";

export default function Home() {
  const {data, isPending, isFetching} = useEventData()
  const [selectedSlug, setSelectedSlug] = React.useState(null)

  if (isPending || isFetching) return <div>Loading</div>

  const selectedPage = selectedSlug ? data.pages.find(p => p.slug === selectedSlug) : null

  return (
    <div>
      <Head>
        <title>{selectedPage ? selectedPage.title : data.eventTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {selectedPage ? (
        <ProductsPage
          title={selectedPage.title}
          products={selectedPage.products}
          onBack={() => setSelectedSlug(null)}
        />
      ) : (
        <PricingPlan
          eventTitle={data.eventTitle}
          pages={data.pages}
          onSelect={(slug) => setSelectedSlug(slug)}
        />
      )}
    </div>
  )
}
