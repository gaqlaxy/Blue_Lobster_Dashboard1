// components/PolicyFilters.tsx
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function PolicyFilters({ onFilterChange }: any) {
  const [regions, setRegions] = useState<string[]>([]);
  const [agents, setAgents] = useState<any[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    region: "",
    agent: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: regionData } = await supabase.from("policies").select("region").limit(100);
      const { data: agentData } = await supabase.from("profiles").select("id, full_name").limit(100);
      const { data: typeData } = await supabase.from("policy_types").select("name").limit(100);

      setRegions([...new Set(regionData?.map(r => r.region))]);
      setAgents(agentData || []);
      setTypes(typeData?.map(t => t.name) || []);
    };

    fetchData();
  }, []);

  const handleChange = (key: string, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <select
        className="border rounded p-2"
        onChange={(e) => handleChange("region", e.target.value)}
        defaultValue=""
      >
        <option value="">All Regions</option>
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <select
        className="border rounded p-2"
        onChange={(e) => handleChange("agent", e.target.value)}
        defaultValue=""
      >
        <option value="">All Agents</option>
        {agents.map((a) => (
          <option key={a.id} value={a.id}>{a.full_name}</option>
        ))}
      </select>

      <select
        className="border rounded p-2"
        onChange={(e) => handleChange("type", e.target.value)}
        defaultValue=""
      >
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="date"
          className="border rounded p-2 w-full"
          onChange={(e) => handleChange("startDate", e.target.value)}
        />
        <input
          type="date"
          className="border rounded p-2 w-full"
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
      </div>
    </div>
  );
}
