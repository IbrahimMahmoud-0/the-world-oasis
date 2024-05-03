import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be loaded`);
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be created`);
  }
  return data;
}

// export async function updateCabin(data) {
//   const { data, error } = await supabase
//     .from("cabins")
//     .update({ other_column: "otherValue" })
//     .eq("some_column", "someValue")
//     .select();
//   if (error) {
//     console.error(error);
//     throw new Error(`Cabins could not be updated`);
//   }
// }
