import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: edithCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("Cabin  successfully Edited");
    },
    onError: (err) => toast.error(err.message),
  });
  return { edithCabin, isEditing };
}

export default useEditCabin;
