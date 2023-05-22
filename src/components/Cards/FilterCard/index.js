import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import { useDebounce } from "../../../hooks";
import { FilterCard as StyledFilterCard } from "./styles";

const FilterCard = ({ isSearchEnabled, filters, handleSetFilter }) => {
  const handleFilterChange = useDebounce(
    type => {
      switch (type) {
        case "COD":
          if (Object.prototype.hasOwnProperty.call(filters, "isCashOnDeliveryAvailable")) {
            handleSetFilter(prev =>
              Object.keys(prev)
                .filter(key => key !== "isCashOnDeliveryAvailable")
                .reduce((acc, key) => {
                  acc[key] = prev[key];
                  return acc;
                }, {}),
            );
          } else {
            handleSetFilter(prev => ({
              ...prev,
              isCashOnDeliveryAvailable: true,
            }));
          }
          break;
        default:
          break;
      }
    },
    100,
    [filters],
  );

  const handleSearch = useDebounce(
    value => {
      if (!isEmpty(value.trim())) {
        handleSetFilter({
          ...filters,
          q: value.trim().toLowerCase(),
        });
      } else {
        handleSetFilter(
          Object.keys(filters)
            .filter(key => !["q"].includes(key))
            .reduce((acc, key) => {
              acc[key] = filters[key];
              return acc;
            }, {}),
        );
      }
    },
    500,
    [filters],
  );

  return (
    <StyledFilterCard isSearchEnabled={isSearchEnabled}>
      <Card className="filters" component="div">
        <CardContent>
          {isSearchEnabled ? (
            <FormControlLabel
              sx={{ flexGrow: 1 }}
              control={
                <TextField
                  id="standard-search"
                  variant="standard"
                  placeholder="Search Products"
                  onChange={e => handleSearch(e.target.value)}
                  type="search"
                  sx={{ width: "100%", marginLeft: "20px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              }
            />
          ) : (
            <Box>Filters</Box>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={!!filters.isCashOnDeliveryAvailable}
                onChange={() => handleFilterChange("COD")}
                inputProps={{ "aria-label": "controlled" }}
                sx={{ padding: 0, marginLeft: "auto" }}
              />
            }
            label="COD Available"
          />
        </CardContent>
      </Card>
    </StyledFilterCard>
  );
};

FilterCard.propTypes = {
  isSearchEnabled: PropTypes.bool,
  filters: PropTypes.shape({
    isCashOnDeliveryAvailable: PropTypes.bool,
    q: PropTypes.string,
    qFields: PropTypes.string,
  }),
  handleSetFilter: PropTypes.func,
};

export default FilterCard;
