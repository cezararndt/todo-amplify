import React, { FC } from "react";

import * as S from "./styles";

interface AppProps {
  title: string;
}

const AppBar: FC<AppProps> = ({ title }) => {
  return <S.AppBar>{title}</S.AppBar>;
};

export default AppBar;
