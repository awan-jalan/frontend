// noinspection TypeScriptValidateTypes

'use client'
import {ChangeEvent, FormEvent, useState} from "react";
import Swal from 'sweetalert2'
import jwt, { JwtPayload } from 'jsonwebtoken';


export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const decodeFromToken = (token: string) => {
    try {
    const {nameid} = jwt.verify(token, "Yahahaha-Hayukkkkkk-Mengerikannnn-Yang-Benerrttttttttt") as { [key: string]: any };
      return nameid

      //const userId = decodedToken.userId;
      // Perform any actions with the user ID
    } catch (error) {
      // Handle error case
      console.error('Failed to decode JWT token:', error);
      return null
    }
  };
  const getUserId = (email: string, password: string) => {
    fetch('https://agrotech-api.agilf.dev/api/auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
        .then(response => {
          if (response.ok) {

            return response.json();
          } else {
            // Handle error case
            Swal.fire(
                'Cancelled',
                'Failed to fetch user ID',
                'error'
            )
            throw new Error('Failed to fetch user ID');
          }
        })
        .then(data => {

          console.log(data.data.token);
          localStorage.setItem("SavedToken", data.data.token);

          // Access the user ID from the response data
          const userId = decodeFromToken(data.data.token);
          handleDeleteUser(userId)
          // Perform any actions with the user ID
        })
        .catch(error => {
          // Handle error case
          Swal.fire(
              'Cancelled',
              'Failed to fetch user ID',
              'error'
          )
          console.error(error);
        });
  };
  const handleDeleteUser = (userId: string) => {
    fetch(`https://agrotech-api.agilf.dev/api/User/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('SavedToken'),
      },
    })
        .then(response => {
          if (response.ok) {
            // User deleted successfully
            // Perform any additional actions or show success message
            Swal.fire(
                'Deleted!',
                'Your account has been deleted.',
                'success'
            )
          } else {
            Swal.fire(
                'Cancelled',
                'User deletion failed',
                'error'
            )
            throw new Error('User deletion failed');
          }
        })
        .catch(error => {
          // Handle error case
          Swal.fire(
              'Cancelled',
              error,
              'error'
          )
          console.error(error);
        });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access the form data from the state object
    const { email, password } = formData;
    console.log(email,password)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'mx-10 bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded',
        cancelButton: 'mx-10 bg-blue-500  hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure to delete your account?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       getUserId(email, password)

      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
            'Cancelled',
            'Your account is safe :)',
            'error'
        )
      }
    })
  };
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">If you wish to delete your account, we respect your decision..</h1>
          </div>


          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form  onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required onChange={handleChange}/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required onChange={handleChange} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Delete My Account</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                To delete your account, kindly review and adhere to our account deletion policy, which includes the terms & conditions and our privacy policy.
              </div>
            </form>

            {/*<div className="text-gray-600 text-center mt-6">*/}
            {/*  Already using A-GroTech? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>*/}
            {/*</div>*/}
          </div>

        </div>
      </div>
    </section>
  )
}
