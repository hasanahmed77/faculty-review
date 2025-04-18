const reviewCardStyles = {
  card: {
    width: { xs: 350, sm: "400", md: 600 },
    display: "flex",
    flexDirection: "row",
    marginBottom: "2rem",
    bgcolor: "#FAFAFA",
    overflow: "hidden",
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  leftBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },
  cardHeader: {
    bgcolor: "white",
    padding: "3rem",
  },
  rightBox: {
    flex: 2,
  },
  typography: {
    color: 'text.secondary',
  },
  boldText: {
    fontWeight: "bold",
  },
};

export default reviewCardStyles;
