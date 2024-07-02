import { useEffect } from "react"

type ToastProps = {
    message: string
    type: 'error' | 'success'
    onClose: () => void
}

const Toast = ({ message, type, onClose }: ToastProps) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [onClose])

    const styles = type === "success"
        ? "fixed bottom-0 right-4 z-50 bg-green-500 text-white p-4 py-2 rounded-md max-w-md"
        : "fixed bottom-0 right-4 z-50 bg-red-500 text-white p-4 py-2 rounded-md max-w-md"

    return (
        <div className={styles}>
            <div className='flex justify-center items-center '>
                <span className="text-lg font-semibold">
                    {message}
                </span>
            </div>
        </div>
    )
}

export default Toast