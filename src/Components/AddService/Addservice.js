import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../NavBar/NavBar';

  
const Addservice = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {user} = useAuth()
    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://intense-badlands-05606.herokuapp.com/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
      };

    return (
        <div>
        <NavBar></NavBar>
      <h1 className="mt-5 text-center text-success">Please Add packages</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("place")}
                placeholder="place name"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
                
              />
              <br />
              <input
                {...register("Duration")}
                placeholder="Duration"
                className="p-2 m-2 w-100"              
              />
              <br />
              <input
              type ="number"
                {...register("price")}
                placeholder="Price"
                className="p-2 m-2 w-100"         
              />
              <br />
              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
               
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Add" className="btn btn-success w-100 " />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Addservice;