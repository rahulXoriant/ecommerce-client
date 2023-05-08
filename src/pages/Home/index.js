import Box from "@mui/material/Box";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryCard from "../../components/Cards/CategoryCard";
import Loader from "../../components/Loader";
import * as CategortActions from "../../store/modules/actions/category.actions";
import { CategoryList } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  useEffect(() => {
    const loadCategories = async () => {
      dispatch(CategortActions.getCategoriesPending());
    };
    loadCategories();
  }, []);

  return (
    <CategoryList>
      {categories.loading ? (
        <Loader />
      ) : isEmpty(categories.value) ? (
        <Box className="no-category-container">
          <Box>No Category Available</Box>
        </Box>
      ) : (
        categories.value.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))
      )}
    </CategoryList>
  );
};

export default Home;
