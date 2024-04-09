"use client";

import React from "react";
import type { Menu } from "@/models/restaurant/menu.type";
import RestaurantCategory from "../restaurantCategory/RestaurantCategory";
import styles from "./restaurantMenu.module.scss";
import RestaurantNewCategory from "@/screens/restaurant/restaurantNewCatergory/RestaurantNewCategory";
import Button from "@/components/shared/controls/button/Button";
import { useSearchParams } from "next/navigation";

type RestaurantMenuProps = Menu & {};

const RestaurantMenu = ({
  category: categories,
  name,
  id,
}: RestaurantMenuProps) => {
  const params = useSearchParams();

  return (
    <div>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{name}</h4>
        <Button
          btnType={"link"}
          btnStyle={"flat"}
          iconSrc={"/icons/Edit.svg"}
          href={"?state=menuEdit&type=edit"}
          className={styles.edit}
        />
        <Button
          btnType={"link"}
          btnStyle={"flat"}
          type={"button"}
          iconSrc={"/icons/Exit.svg"}
          className={styles.delete}
          href={`?${params.toString()}&state=delete&type=menu&menuId=${id}`}
        />
      </div>
      <ul className={styles.categories}>
        {categories.map((category) => {
          return (
            <RestaurantCategory
              key={category.id}
              id={category.id}
              name={category.name}
              photo={`${process.env.API_URL}${category.photo}`}
            />
          );
        })}
        <RestaurantNewCategory menuId={id} />
      </ul>
    </div>
  );
};

export default RestaurantMenu;
