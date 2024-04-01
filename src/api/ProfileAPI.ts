export const editProfile = async () => {
  const response = await fetch("/api/account/image-update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(dataInfo),
  });
  return response.json();
};
