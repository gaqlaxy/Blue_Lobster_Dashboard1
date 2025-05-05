import { supabase } from "../supabaseClient";

export async function fetchPolicies({
  page = 1,
  pageSize = 10,
  sortBy = "start_date",
  order = "desc",
  filters = {},
}) {
  // Compute range for pagination
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  // Start building the query
  let query = supabase
    .from("policies")
    .select("*", { count: "exact" })
    .range(from, to)
    .order(sortBy, { ascending: order === "asc" });

  
  Object.entries(filters).forEach(([key, value]) => {
    if (value != null && value !== "") {
      query = query.eq(key, value);
    }
  });

  // Execute
  const { data, error, count } = await query;
  if (error) throw error;

  return {
    data, 
    total: count, 
  };
}
