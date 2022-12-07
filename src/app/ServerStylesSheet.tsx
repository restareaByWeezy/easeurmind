'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from 'styles/globalStitches'

export const ServerStylesheet = ({ children }: { children: JSX.Element }) => {
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      )
    }
  })

  return <>{children}</>
}
