import { dataProps } from "./getItems.dto";

export const getItems = async (): Promise<dataProps> => {
  const data = await fetch("https://atividade2-cap15.vercel.app/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
