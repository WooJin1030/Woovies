import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => (
  <Image resizeMode="cover" source={{ uri: apiImage(url) }} />
);

export default Poster;
