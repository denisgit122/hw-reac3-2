import './css/UserForm.css'
import {useForm} from "react-hook-form";
const UsersForm = () => {
const {register,handleSubmit,reset}=useForm()

const onsubmi = (data) => {
    console.log(data);
}
return (

  <section>
      <div className={'box'}>
          <div className={'form'}>
              <h2>Login</h2>

              <form onSubmit={handleSubmit(onsubmi)} >

                  <div className={'inputBx'}>
                      <input placeholder={'Username'} type={'text'}
                             {...register('userName',{required:true})
                      }/>
                      {/*<img src="user.png" alt="img"/>*/}
                  </div>

                  <div className={'inputBx'}>
                      <input type="text" placeholder={'email'}
                             {...register('email',{required:true})}
                      />
                      {/*<img src="lock.png" alt=""/>*/}
                  </div>

                  <label className={'remember'}>
                      <input type={'checkbox'} />
                      remember me
                  </label>

                  <div className={'inputBx'}>
                      <input type="submit" value={'login'}/>
                  </div>

              </form>
               <p>forget <a href={"#"}> User </a> </p>
          </div>
      </div>
  </section>
);
};

export {UsersForm};