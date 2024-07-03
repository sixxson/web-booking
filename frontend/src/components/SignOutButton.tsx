import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

export default function SignOutButton() {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const mutation = useMutation(apiClient.sigOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({ message: "Signed out", type: "success" })
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "error" })
        }
    });

    const handleClick = () => {
        mutation.mutate();
    }

    return (
        <button
            onClick={handleClick}
            className='text-sm text-left font-semibold text-red-600  p-4 rounded-md bg-white hover:text-white hover:bg-red-700'>
            Sign Out
        </button>
    )
}
