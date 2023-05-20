import './HelloWorldChildren.css'
function HelloWorldChildren({name,children}) {
  return ( 
    <div>
      {children} {name}
    </div>
   );
}

export default HelloWorldChildren;