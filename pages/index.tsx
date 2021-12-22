/**
 *  This page component is the parent component for all of the site functionality
 */
import React, { useState, useEffect, useContext } from "react";
import useSWR from "swr";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BreedsContext } from "context/BreedsContext";
import Container from "layouts/Container";
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

const Loader = dynamic(() => import("components/Loader"))
const Error = dynamic(() => import("components/Error"))

const Home = () => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [currentUrl, setCurrentUrl] = useState<string>(CAT_API_BREED_URL);
  const [morePages, setMorePages] = useState<boolean>(true);
  const [currentBreedId, setCurrentBreedId] = useState<string | null>(null);
  const [currentBreedLabel, setCurrentBreedLabel] = useState<string | null>(null);
  const [isSearch, setIsSearch] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { breedList, setBreedList } = useContext(BreedsContext);
  const { data: breeds, error } = useSWR(
    [currentUrl, page, currentBreedId, limit],
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
      console.log(breeds.headers)
      const numPages: number = Math.floor(pageCount / amountPerPage) || 0;
      console.log(numPages);
      if (page === numPages) {
        setMorePages(false);
      } else {
        setMorePages(true);
      }
    }
  }, [breeds?.headers, page]);

  // useEffect to change list to cats by a specific breed
  useEffect(() => {
    if (currentBreedId) {
      setIsSearch(false);
      setCurrentUrl(CAT_API_SEARCH_BREED_URL);
      setPage(0)
      setLimit(25)
    }
  }, [currentBreedId]);

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
        const breedName = findCat[0].name
        setCurrentBreedId(breedId);
        setCurrentBreedLabel(breedName);
        setIsSearch(false);
        setCurrentUrl(CAT_API_SEARCH_BREED_URL);
        setPage(0)
        setLimit(25)
      }
    }
  }, [debouncedSearchTerm, breedList]);


  // handle breed input
  const handleCurrentBreed = (id, name) => {
    setCurrentBreedId(id);
    setCurrentBreedLabel(name);
  }

  // reset search
  const resetSearch = () => {
    setCurrentBreedId(null);
    setCurrentBreedLabel(null);
    setCurrentUrl(CAT_API_BREED_URL);
    setIsSearch(true);
    setSearchTerm("");
    setPage(0)
    setLimit(20)
  };  
  return (
    <Container>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <SearchBar
        resetSearch={resetSearch}
        setCurrentBreed={handleCurrentBreed}
        currentBreedLabel={currentBreedLabel}
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
