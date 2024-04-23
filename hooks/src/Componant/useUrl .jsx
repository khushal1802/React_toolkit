import { useEffect, useState } from 'react'

function useUrl (url) {
    const [Res, setRes] = useState();
  
    useEffect(() => {
      fetch(url)
      .then((res) =>res.json())
      .then((data)=>setRes(data));
    },[url]);
    return Res;
}

export default useUrl 