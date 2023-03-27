import { useEffect, useState } from "react";
import { getApi } from "../API/api";
import Card from "./Card";


export const CardsPokemon = ({ navigation, ...props }) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    getApi(props.url).then((res) => {
      setDetails(res.data);
    });
  }, []);

  const elementPokemon = details?.types[0].type.name;

  return <Card tipe={elementPokemon} navigation={navigation} {...details} />;
};
