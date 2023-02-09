import Head from 'next/head'
import Layout from '@/layouts/layout'
import style from '../styles/Form.module.css'
import Link from 'next/link'
import { useFormik } from 'formik'
import { Signup_validate } from '@/lib/validate'
import { useRouter } from 'next/router'



function userAdd() {
const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: "",
      email:"",
      password: "",
      cpassword:""
    },
    validate:Signup_validate,
    // onSubmit: onSubmit
    onSubmit
  });
  
  async function onSubmit(values){
   
    await fetch('http://localhost:3000/api/auth/addUser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(values)
    });
    
  }
    return (
       <Layout>
            <Head>
              <title>Add User</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>Add user</h1>
          <section>
        {/*form*/}
        <form onSubmit={formik.handleSubmit}  className='flex flex-col gap-5' >
          <div className={`${style.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600': ""} `}>
            <input type="text" name='username' placeholder='Name' className={style.input_text} {...formik.getFieldProps('username')} />
          </div>
          {/* {formik.errors.username && formik.touched.username ? <span>{formik.errors.username}</span> : <></>} */}
          <div className={`${style.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600': ""} `}>
            <input type="email" name='email' placeholder='Email' className={style.input_text} {...formik.getFieldProps('email')} />
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>} */}
          <div className= {`${style.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600': ""} `}>
            <input type="password" name='password' placeholder='Password' className={style.input_text} {...formik.getFieldProps('password')} />
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>} */}
          <div className= {`${style.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600': ""} `}>
            <input type="password" name='cpassword' placeholder='Password' className={style.input_text} {...formik.getFieldProps('cpassword')} />
          </div>
          {/* {formik.errors.cpassword && formik.touched.cpassword ? <span>{formik.errors.cpassword}</span> : <></>} */}
          {/*Login Buttons*/}
            <div  className='input-button'>
              <button type='submit' className={style.button}><Link href="/user">Add</Link></button>
            </div>
           
           
            
           
        
        </form>
      </section>
      </Layout>
    )
  }
  
  export default userAdd