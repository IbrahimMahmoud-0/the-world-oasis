import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });
  return { isLoading, error, settings };
}

export default useSettings;
