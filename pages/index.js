// @ts-check
import Head from 'next/head'
import PricingPlan from "@components/PricingPlan";
import ProductsPage from "@components/ProductsPage";
import {useEventData} from "../hooks/useEventData";
import React from "react";
import { useRouter } from 'next/router';
/** @typedef {import('../types/event').EventData} EventData */

export default function Home() {
  const {data, isPending, isFetching} = useEventData()
  /** @type {[string|null, React.Dispatch<React.SetStateAction<string|null>>]} */
  const [selectedSlug, setSelectedSlug] = React.useState(/** @type {string|null} */(null))
  const router = useRouter()

  // Sync selection with URL (?section=slug) so browser back/forward works
  React.useEffect(() => {
    if (!router.isReady || !data) return
    const section = router.query?.section
    if (typeof section === 'string') {
      const exists = data.pages.some(p => p.slug === section)
      setSelectedSlug(exists ? section : null)
    } else {
      setSelectedSlug(null)
    }
  }, [router.isReady, router.query?.section, data])

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
          onBack={() => {
            setSelectedSlug(null)
            // Update the URL without a full navigation
            router.push('/', undefined, { shallow: true })
          }}
        />
      ) : (
        <PricingPlan
          eventTitle={data.eventTitle}
          pages={data.pages}
          onSelect={(slug) => {
            setSelectedSlug(slug)
            router.push({ pathname: '/', query: { section: slug } }, undefined, { shallow: true })
          }}
        />
      )}
    </div>
  )
}
