import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import LoginForm from "./components/loginsignup/LoginForm"; // Import the LoginForm component
import RegistrationForm from "./components/loginsignup/RegistrationForm"; // Import the RegistrationForm component
import './styles/styles.css';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  console.log(url);

  // Function to fetch API configuration
  const fetchApiConfig = useCallback(async () => {
    const res = await fetchDataFromApi("/configuration");
    console.log(res);

    const urlConfig = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
    };

    dispatch(getApiConfiguration(urlConfig));
  }, [dispatch]);

  // Function to fetch genres
  const genresCall = useCallback(async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);

    data.forEach(({ genres }) => {
      genres.forEach((item) => {
        allGenres[item.id] = item;
      });
    });

    // Store genres in redux store
    dispatch(getGenres(allGenres));
  }, [dispatch]);

  // Fetch data on mount
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [fetchApiConfig, genresCall]); // Add functions as dependencies

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/login" element={<LoginForm />} /> {/* Login Route */}
        <Route path="/register" element={<RegistrationForm />} /> {/* Registration Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
