import Box from "@mui/material/Box";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import { CONST_VALUE } from "../../../constants";
import CategoryCard from "../../Cards/CategoryCard";
import Loader from "../../Common/Loader";
import { CategoryContainer as StyledCategoryContainer } from "./styles";

const CategoryContainer = ({ categories }) => (
  <StyledCategoryContainer data-test="category-container">
    {categories.loading ? (
      <Loader data-test="category-loader" />
    ) : isEmpty(categories.value) ? (
      <Box className="no-category-container" data-test="no-category-container">
        <Box>{CONST_VALUE.NO_CATEGORY_AVAILABLE}</Box>
      </Box>
    ) : (
      <Box data-test="category-list">
        {categories.value.map(category => (
          <CategoryCard key={category.id} category={category} data-test="category-card" />
        ))}
      </Box>
    )}
  </StyledCategoryContainer>
);

CategoryContainer.propTypes = {
  categories: PropTypes.shape({
    value: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }),
    ),
    loading: PropTypes.bool,
  }),
};

export default CategoryContainer;
