import React from "react";

export type Props = {
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
  endType: "loss" | "win";
};
