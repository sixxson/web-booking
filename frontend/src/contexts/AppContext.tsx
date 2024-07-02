import React, { useContext, useState } from "react"
import Toast from "../components/Toast"


type ToastNessage = {
    message: string
    type: 'error' | 'success'
}

type AppContext = {
    showToast: (toastMessage: ToastNessage) => void
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [toast, setToast] = useState<ToastNessage | undefined>(undefined)
    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => {
                setToast(toastMessage)
            },
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