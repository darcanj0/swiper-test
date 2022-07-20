import "./list.css";
import api from "../../api/index";
import { useEffect, useState } from "react";
import { Card } from "../card/card";

export const List = () => {
  const [games, setGames] = useState([]);

  const getAllGames = async () => {
    const response = await api.get("/game");
    setGames(response.data);
    console.log(games);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div id="list">
      {games.map((game) => {
        return (
          <Card
            title={game.title}
            cover_image_url={game.cover_image_url}
            score={game.score}
            year={game.year}
          />
        );
      })}
    </div>
  );
};
