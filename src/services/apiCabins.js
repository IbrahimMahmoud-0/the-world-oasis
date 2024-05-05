import supabase, { supabaseURL } from "./supabase";

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

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseURL);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `https://evgsjmawhpcodumgienc.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;
  // create/edit cabin
  let query = supabase.from("cabins");
  // create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be created`);
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
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
