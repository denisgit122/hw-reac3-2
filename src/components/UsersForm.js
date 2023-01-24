import './css/UserForm.css'
const UsersForm = () => {


return (
  <section>
      <div className={'box'}>
          <div className={'form'}>
              <h2>Login</h2>

              <form >

                  <div className={'inputBx'}>
                      <input placeholder={'Username'} type={'text'}/>
                      {/*<img src="user.png" alt="img"/>*/}
                  </div>

                  <div className={'inputBx'}>
                      <input type="text" placeholder={'email'}/>
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