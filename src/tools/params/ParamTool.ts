import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import {
  filterActions,
  type FilterState,
} from "../../store/slices/filter/filterSlice";

function parseSkills(value: string | null) {
  if (value == null) {
    return [];
  }
  return value.split(",").filter(Boolean);
}

function readQueryParams(searchParams: URLSearchParams) {
  return {
    searchString: searchParams.get("searchString") ?? "",
    skills: parseSkills(searchParams.get("skills")),
  };
}

function isSameArray(a: string[], b: string[]) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

function buildQueryParams(state: FilterState, UrlSearchString: string) {
  const params = new URLSearchParams();


  if (state.searchString.length > 0) {
    params.set("searchString", state.searchString);
  } else if (UrlSearchString.length > 0) {
    params.set("searchString", UrlSearchString);
  }

  

  if (state.skills.length > 0) {
    params.set("skills", state.skills.join(","));
  }

  return params;
}

export function useQueryParams() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterState = useAppSelector((state) => state.filter);

  const urlState = useMemo(() => readQueryParams(searchParams), [searchParams]);

  useEffect(() => {
    if (filterState.searchString !== urlState.searchString && urlState.searchString.length > 0) {
      dispatch(filterActions.setSearchString(urlState.searchString));
    }

    if (!isSameArray(filterState.skills, urlState.skills)) {
      dispatch(filterActions.setSkills(urlState.skills));
    }
  }, [
    urlState.searchString,
    urlState.skills,
  ]);

  useEffect(() => {
    const nextParams = buildQueryParams(filterState, urlState.searchString);

    if (nextParams.toString() !== searchParams.toString()) {
      setSearchParams(nextParams);
    }
  }, [filterState]);
}

