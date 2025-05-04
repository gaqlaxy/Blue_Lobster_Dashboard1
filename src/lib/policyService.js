// src/lib/policyService.js
import { supabase } from '../supabaseClient';

/**
 * Fetch a page of policies, with optional filters & sorting.
 *
 * @param {object}   options
 * @param {number}   options.page       1-based page number
 * @param {number}   options.pageSize   items per page
 * @param {string}   options.sortBy     column to sort on (e.g. 'start_date')
 * @param {'asc'|'desc'} options.order  sort direction
 * @param {object}   options.filters    e.g. { status: 'Active', policy_type: 'Life' }
 * @returns {Promise<{ data, total }>   data: array of policies, total: total matching rows }
 */
export async function fetchPolicies({
    page = 1,
    pageSize = 10,
    sortBy = 'start_date',
    order = 'desc',
    filters = {},
}) {
    // Compute range for pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    // Start building the query
    let query = supabase
        .from('policies')
        .select('*', { count: 'exact' })
        .range(from, to)
        .order(sortBy, { ascending: order === 'asc' });

    // Apply each filter as an equality check
    Object.entries(filters).forEach(([key, value]) => {
        if (value != null && value !== '') {
            query = query.eq(key, value);
        }
    });

    // Execute
    const { data, error, count } = await query;
    if (error) throw error;

    return {
        data,         // array of policies for this page
        total: count, // total matching rows (for UI pagination controls)
    };
}
