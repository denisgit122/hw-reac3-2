const User = ({post}) => {
    const {id,name,email}=post
return (
  <div>

      <div>{id}</div>

      <div>{name}</div>

      <div>{email}</div>
  </div>
);
};

export {User};