// import React from 'react'
// import '../Style/Forms.css'
// import { useForm } from 'react-hook-form'
 
// const Forms = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm()
//       const onSubmit  = (data) =>  {
//         console.log(data);
//         alert("your message is deliverd")
//       }

//   return (

//     <>
//  <div className="container-form">
//  <h1>contact me</h1>
//  <form action=""  onSubmit={handleSubmit(onSubmit)}  >
//     <div className="name-inp">
//     <label htmlFor="text"  data-aos="fade-down-right">Enter Name</label>
//     <input type="text" placeholder='enter name'  {...register("name",
//         {required:"username is must",
//         minLength:{value:3,message:"enter more than 3"},
//         maxLength:{value:10,message:"enter less than 10"}})}  /> 
//     {errors.name && <p>{errors.name.message}</p>}
//     </div>
   
//  <div className="email-inp">
//  <label  data-aos="fade-down-right" htmlFor="email">Enter Email</label>
//      <input type="email"placeholder='enter email'
//     {...register("email",{
//         required:"username is required",
//         pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
//             message:"enter valid email adress"
//         }
//     }
//     )}

//      />
//    {errors.email && <p>{errors.email.message}</p>}
//  </div>
    
//    <div    className="messge-inp">
//    <label data-aos="fade-down-right" htmlFor="message">enter your message</label>
//     <textarea  placeholder='Enter your message'{...register("message",{required:"message is required"}
  
//   )} ></textarea>
//  {errors.message && <p>{errors.message.message}</p>}
     
//     <input id="submit" type="submit" value="send message" />
//    </div>
//  </form>
//  </div>

//     </>
//   )
// }

// export default Forms


 

 