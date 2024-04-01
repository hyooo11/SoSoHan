export const editProfile = async (formData: FormData) => {
  const response = await fetch("/api/account/image-update", {
    method: "PUT",
    body: formData,
  });
  return response.json();
};
