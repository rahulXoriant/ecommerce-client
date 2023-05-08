
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryContainer from "../../components/Containers/CategoryContainer"
import * as CategortActions from "../../store/modules/actions/category.actions";

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
    <CategoryContainer categories={categories} />
  );
};

export default Home;
