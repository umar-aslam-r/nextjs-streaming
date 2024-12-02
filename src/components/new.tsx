import { isServer, useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'

function getBaseURL() {
    if (!isServer) {
      return ''
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    }
    return 'http://localhost:3000'
}
const baseUrl = getBaseURL()
  

export const New = ({wait}) => {
    return (
    <Suspense fallback={<div>waiting {wait}....</div>}>
        <MyComponent wait={wait} />
    </Suspense>
    );
}



function MyComponent(props: { wait: number }) {
    const {data} = useSuspenseQuery({
        queryKey: ['wait', props.wait],
        queryFn: async () => {
          const path = `/api/wait?wait=${props.wait}`
          const url = baseUrl + path
    
          const res: string = await (
            await fetch(url, {
              cache: 'no-store',
            })
          ).json()
          return res
        },
      });

  
    
      return <div>result: {JSON.stringify(data)}</div>
  }