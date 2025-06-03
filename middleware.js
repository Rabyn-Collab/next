const { NextResponse } = require("next/server");




const middleware = (request) => {

  return NextResponse.next();
};




export default middleware;