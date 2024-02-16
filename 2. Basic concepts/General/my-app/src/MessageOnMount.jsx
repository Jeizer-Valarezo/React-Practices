import { useEffect, useRef } from "react";

export function MessageOnMount () {
  
  const isMounted = useRef(false);

  useEffect(() => {
    
    if (!isMounted.current) {
      console.log("Component is mounted for the first time!");
      
      isMounted.current = true;
    }

    
    return () => {
      console.log("Component is mounted again for debug purposes.");
    };
  }, []); 

  return <div>Component Content</div>;
};

