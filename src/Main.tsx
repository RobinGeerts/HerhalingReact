import ReactDOM from 'react-dom/client'
import MainExample1 from './mainExample1.tsx'
import {StrictMode} from 'react'
import MainExample2 from './mainExample2.tsx'
import Titel from './example1/Titel.tsx'
import MainExample3 from './mainExample3.tsx'
import Home from './home/home.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: import.meta.env.PROD,
            useErrorBoundary: false,
        },
    },
})

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Titel vulIn={'Example 1'} className={'mainmenu'}></Titel>
                <MainExample1></MainExample1>
            <Titel vulIn={'Example 2'} className={'mainmenu'}></Titel>
                <MainExample2></MainExample2>
            <Titel vulIn={'Example 3'} className={'mainmenu'}></Titel>
                <MainExample3></MainExample3>
            <Titel vulIn={'Example 4'} className={'mainmenu'}></Titel>
                <Home></Home>
        </QueryClientProvider>
    </StrictMode>
)
