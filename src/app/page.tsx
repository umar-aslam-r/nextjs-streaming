'use client'
import { Suspense } from 'react'
import {New} from '../components/new'

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'


export default function MyPage() {
  return (
    <div>
      <New wait={2000} />
      <New wait={3000} />
      <New wait={4000} />
      <New wait={5000} />
      <New wait={6000} />
      <New wait={7000} />
    

      <fieldset>
        <legend>
          combined <code>Suspense</code>-container
        </legend>
        <Suspense
          fallback={
            <>
              <div>waiting 800....</div>
              <div>waiting 900....</div>
              <div>waiting 1000....</div>
            </>
          }
        >
          <New wait={800} />
          <New wait={900} />
          <New wait={1000} />
        </Suspense>
      </fieldset>
    </div>
  )
}