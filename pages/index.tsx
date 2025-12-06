import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";
import ProductsPage from "@components/ProductsPage";
import {useEventData} from "../hooks/useEventData";
import React from "react";
import { useRouter } from 'next/router';

export default function Home() {
  const {data, isPending, isFetching} = useEventData()
  const [selectedSectionId, setSelectedSectionId] = React.useState<string | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    if (!router.isReady || !data) return
    const section = router.query?.section
    if (typeof section === 'string') {
      const exists = data.pages.some(p => p.sectionId === section)
      setSelectedSectionId(exists ? section : null)
    } else {
      setSelectedSectionId(null)
    }
  }, [router.isReady, router.query?.section, data])

  if (isPending || isFetching) return <div>Loading</div>

  const selectedPage = selectedSectionId ? data.pages.find(p => p.sectionId === selectedSectionId) ?? null : null

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
          onBack={() => {
            setSelectedSectionId(null)
            // Update the URL without a full navigation
            router.push('/', undefined, { shallow: true })
          }}
        />
      ) : (
        <PricingPlan
          eventTitle={data.eventTitle}
          pages={data.pages}
          onSelect={(sectionId) => {
            setSelectedSectionId(sectionId)
            router.push({ pathname: '/', query: { section: sectionId } }, undefined, { shallow: true })
          }}
        />
      )}
    </div>
  )
}
