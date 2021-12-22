import React from "react";
import useSWR from "swr";
import { CAT_API_BREED_URL } from "utils/constants";
import { fetchFromCatAPI } from "utils/api";
import Container from "layouts/Container";

const HomePage = () => {
  const { data, error } = useSWR(CAT_API_BREED_URL, fetchFromCatAPI);

  return (
    <Container>
      <main>Well get there...</main>
    </Container>
  );
};

export default HomePage;
