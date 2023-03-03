import { QueryProvider } from '..'

const GeneralProvider = ({ children }) => {
    return (

        <QueryProvider>
            {children}
        </QueryProvider>

    )
}

export default GeneralProvider