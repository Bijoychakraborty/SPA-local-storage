import React from 'react';

const SideCart = ({watchTime}) => {
    return (
       
    <div>
    <h1>My Cart</h1>

    <div className="mt-5 text-center">
      <p>total watch time</p>
      <input type="text" value={0} disabled />
    </div>
    <h5 className="mt-5">Add Break time</h5>
    <dutton
      onClick={() => {
        setBreakTime(15);
      }}
      className="w-25 btn-circle m-1 btn btn-info"
    >
      15
    </dutton>
    <button
     
      className="w-25 btn-circle bg-warning btn btn-info"
    >
      20
    </button>
    <dutton
      className="w-25 btn-circle m-1 bg-danger btn btn-info"
    >
      25
    </dutton>
    <input type="text" value={0} disabled />
    <button  className="mt-5 btn btn-info w-100">
      Complete
    </button>
  </div>
);
};

export default SideCart;