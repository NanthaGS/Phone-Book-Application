// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import "./Add.css"; 
// import axios from "axios";

// const Add = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phoneNo: "",
//     email: "",
//     address: "",
//     job_title: "",
//     company: "",
//     notes: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("jwtToken");
//       if (!token) {
//         console.error("You need to log in to perform this action.");
//         return;
//       }
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:8181/api/v1/demo/addcontacts",
//         formData,
//         config
//       );
//       console.log(response.data);
//       setFormData({
//         name: "",
//         phoneNo: "",
//         email: "",
//         address: "",
//         job_title: "",
//         company: "",
//         notes: "",
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="imgs">
//         <Navbar />
//         <div>
//           <div></div>
//           <div className="signup-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text1"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   name="phoneNo"
//                   value={formData.phoneNo}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email1"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>
//                 <input
//                   type="text1"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Job Title</label>
//                 <input
//                   type="text1"
//                   name="job_title"
//                   value={formData.job_title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Company</label>
//                 <input
//                   type="text1"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Notes</label>
//                 <textarea
//                   name="notes"
//                   value={formData.notes}
//                   onChange={handleChange}
//                   rows={4}
//                 />
//               </div>

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;


import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Add.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    address: "",
    job_title: "",
    company: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the user is logged in and has a JWT token
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("You need to log in to perform this action.");
        return;
      }

      // Use the JWT token in the request headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:8181/api/v1/demo/addcontacts",
        formData,
        config
      );
      console.log(response.data);
      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        address: "",
        job_title: "",
        company: "",
        notes: "",
      });
      alert("Contact added successfully");
      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="imgs">
        <Navbar />
        <div>
          <div></div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text1"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text1"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text1"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text1"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;