export interface Profile {
	id: string;
	full_name: string;
	phone: string | null;
	address: string | null;
	region: string | null;
}

export interface Role {
	role_id: number;
	roles: {
		name: string;
	};
}

export interface Policy {
	id: string;
	policy_number: string;
	policy_type: string;
	coverage_amount: number | null;
	premium_amount: number | null;
	start_date: string | null;
	end_date: string | null;
	status: string | null;
	region: string | null;
	policyholder_id: string;
	agent_id: string | null;
	created_at: string;
	updated_at: string;
}
