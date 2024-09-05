export const sortOptions = {
  "By None": "",
  "By AlbumID Asc": "By AlbumID Asc",
  "By AlbumID Desc": "By AlbumID Desc",
};

export const sortOptionsFilter = Object.entries(sortOptions).map(
  ([key, value]) => ({
    value: value,
    label: key,
  })
);
