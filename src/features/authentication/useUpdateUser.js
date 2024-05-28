import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueryData(["user"], user);
      toast.success("User account successfully Updated");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
