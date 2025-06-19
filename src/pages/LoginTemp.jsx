import React from 'react';

const LoginTemp = () => {
  return (
    <div>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" /><br /><br />

        <label>Enter your password:</label>
        <input type="password" placeholder="Enter your password" /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginTemp;
