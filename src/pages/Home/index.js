import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "../../components/Loader";
import * as CategortActions from "../../store/modules/actions/category.actions";
import { getCategoryLogo } from "../../utils/image";
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
          <Card
            key={String(category.id)}
            sx={{ width: "100%" }}
            component={Link}
            to={`/category/${category.slug}`}
          >
            <CardContent>
              <img src={getCategoryLogo(category.name)} alt={category.name} />
              <Typography variant="h5" component="h5">
                {category.name}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </CategoryList>
  );
};

export default Home;
