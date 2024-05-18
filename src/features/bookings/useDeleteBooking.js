import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as killBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => killBooking(id),
    onSuccess: () => {
      toast.success("Booking was deleted Successfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => toast.error("Unable to delete booking"),
  });
  return { deleteBooking, isDeleting };
}
