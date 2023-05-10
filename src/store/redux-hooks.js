import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = (fnc) => useDispatch(fnc);
export const useAppSelector = (fnc) => useSelector(fnc);
