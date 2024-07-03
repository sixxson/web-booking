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
            className='btn text-blue-600 border-none mx-2
            font-bold bg-white hover:bg-gray-100'>
            Sign Out
        </button>
    )
}
