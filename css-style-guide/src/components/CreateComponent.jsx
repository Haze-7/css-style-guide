//form to create a component 
import { useState } from "react";
import { supabase } from "../supabaseClient";

function CreateComponent() {

    const [status, setStatus] = useState("");

    //object that holds all the form data / vals
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        html_code: "",
        css_code: "",
        js_code: "",
        notes: "",
        database: "",
      });

    // input handler
    // goes through form data, sets it to value of input (from user)
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

      // submit handler
      //may remove?

      const handleSubmit = async (e) => {
        e.preventDefault(); // prevents default form reload
        setStatus("Submitting...");
        console.log("Submit handler triggered"); // << Add this


        console.log("Form data being submitted:", formData);
        const { error } = await supabase.from("components").insert([formData]);

      
        if (error) {
          console.error("Error inserting:", error);
          setStatus("Error submitting.");
        } else {
          setStatus("Component submitted successfully!");
          setFormData({
            name: "",
            description: "",
            html_code: "",
            css_code: "",
            js_code: "",
            notes: "",
            database: "",
          });
        }
      };

  return (
    <>
     <div className="">
        <form onSubmit={handleSubmit} className="relative h-[40rem] w-full flex flex-col justify-center items-center bg-gray rounded-2xl p-4 shadow-md text-ivory">
        <div className="bg-gold h-[10%] w-[10%] mb-[2%]">
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-full text-xl"
            />
        </div>
        <button type="submit" className="bg-slate h-[9%] w-[12%] rounded-2xl text-xl ">Submit Component</button>
        <p className="mt-2">{status}</p>

        </form>
     </div>
    </>
  );
}

export default CreateComponent;

// <input
//   type="text"
//   name="name"
//   value={formData.name}
//   onChange={handleChange}
// />

// <button type="submit">Submit Component</button> 
//status message
// <p className="mt-2">{status}</p> 
