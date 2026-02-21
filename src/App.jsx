import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const baseUrl = "https://remote-internship-api-production.up.railway.app";

  const [store, setStore] = useState({
    onboarding: [],
    trendingNFT: [],
    newCollections: [],
    popularCollections: [],
  });

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  async function fetchData() {
    try {
      const [onboarding, trending, newColl, popular] = await Promise.all([
        axios.get(`${baseUrl}/selectedCollection`),
        axios.get(`${baseUrl}/trendingNFTs`),
        axios.get(`${baseUrl}/newCollections`),
        axios.get(`${baseUrl}/popularCollections`),
      ]);

      setStore({
        onboarding: onboarding.data.data,
        trendingNFT: trending.data.data,
        newCollections: newColl.data.data,
        popularCollections: popular.data.data,
      });
    } catch (error) {
      console.error("Fetch failed", error);
    } finally {
      setLoading(false);
    }
  }

  function handleLoadMore(length) {
    setVisibleCount((prevCount) => {
      if (!prevCount || prevCount >= length - 6) {
        setVisible(false);
      }
      return prevCount + 6;
    });
  }

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchData();
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        store,
        loading,
        setLoading,
        handleLoadMore,
        visible,
        visibleCount,
        setVisibleCount,
        setVisible,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
