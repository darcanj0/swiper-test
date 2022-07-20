import "./list.css";

import api from "../../api/index";

import { useEffect, useState } from "react";

import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../card/card";

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
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        rewind={true}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
      >
        {games.map((game) => {
          return (
            <SwiperSlide>
              <Card
                title={game.title}
                cover_image_url={game.cover_image_url}
                year={game.year}
                score={game.score}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
