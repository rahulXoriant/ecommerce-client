import Box from "@mui/material/Box";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import CategoryCard from "../../Cards/CategoryCard";
import Loader from "../../Common/Loader";
import { CategoryContainer as StyledCategoryContainer } from "./styles";

const CategoryContainer = ({ categories }) => (
  <StyledCategoryContainer>
    {categories.loading ? (
      <Loader />
    ) : isEmpty(categories.value) ? (
      <Box className="no-category-container">
        <Box>No Category Available</Box>
      </Box>
    ) : (
      categories.value.map(category => <CategoryCard key={category.id} category={category} />)
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
