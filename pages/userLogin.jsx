
import Head from 'next/head'
import Layout from '@/layouts/layout'
import Link from 'next/link'
import style from '../styles/Form.module.css'
import { useFormik } from 'formik'
import Login_validate from '@/lib/validate'
function userLogin() {

  const formik = useFormik({
    initialValues: {
      email: ""  ,
      password: ""
    },
    validate:Login_validate,
    // onSubmit: onSubmit
    onSubmit
  });
  console.log(formik.errors)
  async function onSubmit(values){
    console.log(values)
  }

  return (
   <Layout>
      <Head>
          <title>User Login</title>
      </Head>
      <h1>userLogin</h1>
      <section>
        {/*form*/}
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5' >
          <div className={`${style.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600': ""} `}>
            <input type="email" name='email' placeholder='Email' className={style.input_text} {...formik.getFieldProps('email')}/>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>} */}
          <div className= {`${style.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600': ""} `}>
            <input type="password" name='password' placeholder='Password' className={style.input_text}  onChange={formik.handleChange} value={formik.values.password} {...formik.getFieldProps('password')} />
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>} */}
          {/*Login Buttons*/}
            <div  className='input-button'>
              <button type='submit' className={style.button}>Login </button>
            </div>
            <div  className='input-button'>
              <button type='button'>Sign In With Google</button>
            </div>
            <div  className='input-button'>
              <button type='button'>Sign in With Github</button>
            </div>
            {/* Bottom */}

            <p>
              Don't Have an Account ? <Link className='text-blue-400' href={'/userRegister'}> Sign-up Here </Link>
            </p>
           
        
        </form>
      </section>
      
   </Layout>
   
  )
}

export default userLogin