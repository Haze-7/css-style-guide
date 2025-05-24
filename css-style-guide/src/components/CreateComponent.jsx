//form to create a component 
import { useState } from "react";
import { supabase } from "../supabaseClient";

function CreateComponent() {

    const [status, setStatus] = useState("");
    const [formVisible, setFormVisible] = useState();

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
        <form onSubmit={handleSubmit} className="relative h-[96vh] w-[96vw] mx-auto flex flex-col bg-gray rounded-2xl p-4 shadow-xl text-ivory">
            {/* Flex Wrapper */}
            <div className="flex flex-col lg:flex-row gap-2 pt-[1%]">
              
              {/* Name input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.8rem]">Name</h1>
                  <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>
              {/* Description input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">Description</h1>
                  <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>
              {/* HTML Code input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">HTML Code</h1>
                  <input
                  type="text"
                  name="html_code"
                  value={formData.html_code}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>

              {/* CSS Code input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">CSS Code</h1>
                <input
                type="text"
                name="css_code"
                value={formData.css_code}
                onChange={handleChange}
                className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                />
              </div>

              {/* JavaScript Code input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">JavaScript</h1>
                  <input
                  type="text"
                  name="js_code"
                  value={formData.js_code}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>

              {/* Notes input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">Notes</h1>
                  <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>

              {/* Database input form */}
              <div className="">
                <h1 className="text-3xl text-gold font-tungsten pl-[0.5rem]">Database</h1>
                  <input
                  type="text"
                  name="database"
                  value={formData.database}
                  onChange={handleChange}
                  className="bg-ivory h-[3rem] w-[9rem] text-xl text-slate rounded-2xl px-2.5"
                  />
              </div>
            <button type="submit" className="bg-slate h-[4rem] w-[9rem] rounded-2xl text-xl justify-center items-center mx-auto">Submit Component</button>
            <p className="mt-2">{status}</p>
          </div>
        </form>
     </div>
    </>
  );
}

export default CreateComponent;

//Goal / Plan
//Have input forms for each (think like workdayCard)
//have responsivity (good flexbox / responsivity practice)
//have button to trigger the form menu 

//find a way to make form scroll / fit text/ fit to size





// <input
//   type="text"
//   name="name"
//   value={formData.name}
//   onChange={handleChange}
// />

// <button type="submit">Submit Component</button> 
//status message
// <p className="mt-2">{status}</p> 
