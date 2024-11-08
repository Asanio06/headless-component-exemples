import { Badge } from "antd";
import React from "react";
import styles from "./BadgeWithRandomColor.module.scss";

export function BadgeWithRandomColor() {
  return (
    <Badge
      className={styles.badge}
      size="default"
      color={`#${((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, "0")}`}
    />
  );
}
