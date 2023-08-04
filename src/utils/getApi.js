import axios from "axios";

export async function fetchUsers() {
  try {
    const response = await axios.get("https://ddsvts-8080.csb.app/users");
    if (response.data.length > 0) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
