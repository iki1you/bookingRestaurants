import { Review } from "@/models/restaurant/review.type";

export const testReviews: Review[] = [
  {
    id: 1,
    time: "23.03.2024 в 15:00",
    text:
      "Все отлично, зашли пообедать: приятная атмосфера, блюда, персонал. Все очень понравилось!" +
      " Спасибо Алексею, порекомендовал нам очень вкусный десерт с интересной подачей.",
    rating: 5,
    user: 1,
  },
  {
    id: 2,
    time: "15.03.2024 в 12:00",
    text:
      "Приятная атмосфера, хорошая и вкусная пища, вежливый квалифицированный персонал." +
      " В основном конечно классика итальянской кухни на достойном уровне!",
    rating: 5,
    user: 2,
  },
  {
    id: 3,
    time: "23.04.2024 в 15:23",
    text:
      "Я в большом восторге! Прекрасное расположение, красивое украшение входа, профессиональная подача блюд) ну и," +
      " конечно, очень вкусные ризотто и лимончелло))",
    rating: 5,
    user: 3,
  },
];
