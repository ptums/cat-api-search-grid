import React, { useState, useEffect, useContext } from "react";
import useSWR from "swr";
import Head from "next/head";
import { BreedsContext } from "context/BreedsContext";
import Container from "layouts/Container";
import Loader from "components/Loader";
import Error from "components/Error";
import CardWrapper from "components/CardWrapper";
import SearchBar from "components/SearchBar";
import Pagination from "components/Pagination";
import {
  CAT_API_BREED_URL,
  CAT_API_SEARCH_BREED_URL,
  SITE_TITLE,
} from "utils/constants";
import { fetchFromCatAPI, fetchAllBreeds } from "utils/api";
import useDebounce from "hooks/useDebounce";

const Home = () => {
  const [page, setPage] = useState<number>(0);
  const [currentUrl, setCurrentUrl] = useState<string>(CAT_API_BREED_URL);
  const [morePages, setMorePages] = useState<boolean>(true);
  const [currentBreed, setCurrentBreed] = useState<string | null>(null);
  const [isSearch, setIsSearch] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { breedList, setBreedList } = useContext(BreedsContext);
  const { data: breeds, error } = useSWR(
    [currentUrl, page, currentBreed],
    fetchFromCatAPI
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // useEffect for pagination
  useEffect(() => {
    if (breeds?.headers) {
      const pageCount: number = parseInt(
        breeds.headers["pagination-count"],
        10
      );
      const amountPerPage: number = parseInt(
        breeds.headers["pagination-limit"],
        10
      );
      const numPages: number = Math.floor(pageCount / amountPerPage) || 0;

      if (page === numPages) {
        setMorePages(false);
      } else {
        setMorePages(true);
      }
    }
  }, [breeds?.headers, page]);

  // useEffect to change list to cats by a specific breed
  useEffect(() => {
    if (currentBreed) {
      setIsSearch(false);
      setCurrentUrl(CAT_API_SEARCH_BREED_URL);
    }
  }, [currentBreed]);

  // useEffect to set dog breed list to context
  useEffect(() => {
    if (!breedList) {
      fetchAllBreeds().then((res) => {
        const allBreeds = res.data.map(({ id, name }) => ({ id, name }));
        setBreedList(allBreeds);
      });
    }
  }, [breedList, setBreedList]);

  // useEffect to set search term and call API
  useEffect(() => {
    if (debouncedSearchTerm) {
      const findCat = breedList.filter(
        (breed) =>
          breed.name.trim().toLowerCase() ===
          debouncedSearchTerm.trim().toLowerCase()
      );

      if (findCat.length > 0) {
        const breedId = findCat[0].id;
        setCurrentBreed(breedId);
        setIsSearch(false);
        setCurrentUrl(CAT_API_SEARCH_BREED_URL);
      }
    }
  }, [debouncedSearchTerm, breedList]);

  // reset search
  const resetSearch = () => {
    setCurrentBreed(null);
    setCurrentUrl(CAT_API_BREED_URL);
    setIsSearch(true);
    setSearchTerm("");
  };

  // handle search input

  return (
    <Container>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <SearchBar
        resetSearch={resetSearch}
        setCurrentBreed={setCurrentBreed}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      {!breeds && <Loader />}
      {error && <Error error={JSON.stringify(error)} />}
      {breeds && (
        <main>
          <Pagination morePages={morePages} page={page} setPage={setPage} />
          <CardWrapper isSearch={isSearch} breeds={breeds.data} />
          <Pagination morePages={morePages} page={page} setPage={setPage} />
        </main>
      )}
      <footer className="mt-6 w-full border-t text-center">
        <p className="mt-7 text-base">
          Made with<span className="mx-1">❤️</span> 2021
        </p>
      </footer>
    </Container>
  );
};

export default Home;
