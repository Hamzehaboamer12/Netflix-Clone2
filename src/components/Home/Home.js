import { useState, useEffect } from "react";
import axios from "axios";

import Movielist from '../MovieList/MovieList';



function Home() {
  const [data, setData] = useState([]);


  // console.log(process.env.REACT_APP_BASE_URL);
  const getAllRecipes = async () => {
    // await // here the thing that will happen (fetching from API or getting from database )
    // return await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`)
    return await axios
      .get(`https://movie-hamzeh.herokuapp.com/getMovies`)
      .then((result) => {
        //console.log(result.data);
        return result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    void (async () => {
      let data = await getAllRecipes();
      setData(data);
    })();
  }, []);



  return (
    <>
   

   <Movielist data={data}/>
     
    </>
  );
}

export default Home;


