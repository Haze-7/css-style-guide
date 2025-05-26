// src/components/ComponentViewer.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function ComponentViewer() {
  const [component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComponent = async () => {
      const { data, error } = await supabase
        .from("components")
        .select("*")
        .limit(1)
        .single(); // gets the first row

      if (error) {
        console.error("Error fetching component:", error.message);
      } else {
        setComponent(data);
      }

      setLoading(false);
    };

    fetchComponent();
  }, []);

  if (loading) return <p className="text-ivory">Loading...</p>;
  if (!component) return <p className="text-red-500">No component found.</p>;

  return (
    <div className="bg-gray rounded-2xl p-4 shadow-md text-ivory">
      <h2 className="text-2xl font-bold mb-2">{component.name}</h2>
      {component.description && <p className="mb-4">{component.description}</p>}

      <div className="mb-4">
        <h3 className="font-semibold">HTML:</h3>
        <pre className="bg-black text-green-200 p-2 rounded text-sm whitespace-pre-wrap">{component.html_code}</pre>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">CSS:</h3>
        <pre className="bg-black text-blue-200 p-2 rounded text-sm whitespace-pre-wrap">{component.css_code}</pre>
      </div>

      {component.js_code && (
        <div className="mb-4">
          <h3 className="font-semibold">JavaScript:</h3>
          <pre className="bg-black text-yellow-200 p-2 rounded text-sm whitespace-pre-wrap">{component.js_code}</pre>
        </div>
      )}

      {component.notes && (
        <div>
          <h3 className="font-semibold">Notes:</h3>
          <p>{component.notes}</p>
        </div>
      )}
    </div>
  );
}

// Test component
//Use to learn how to use supabase / get data