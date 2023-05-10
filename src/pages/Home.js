import React, { useEffect } from "react";

import CategoryContainer from "../components/Containers/CategoryContainer";
import * as CategortActions from "../store/modules/actions/category.actions";
import { useAppDispatch, useAppSelector } from "../store/redux-hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category);

  useEffect(() => {
    const loadCategories = async () => {
      dispatch(CategortActions.getCategoriesPending());
    };
    loadCategories();
  }, []);

  return <CategoryContainer categories={categories} />;
};

export default Home;
