import React, { useContext, useState } from "react"
import Toast from "../components/Toast"
import { useQuery } from "react-query"
import * as apiClient from "../api-client"

type ToastNessage = {
    message: string
    type: 'error' | 'success'
}

type AppContext = {
    showToast: (toastMessage: ToastNessage) => void
    isLoggedIn: boolean
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [toast, setToast] = useState<ToastNessage | undefined>(undefined)

    const { isError } = useQuery("validateToke", apiClient.validateToken, {
        retry: false,

    })

    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => {
                setToast(toastMessage)
            },
            isLoggedIn: !isError
        }}
        >
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(undefined)} />)}
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context as AppContext
}