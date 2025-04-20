const profCardStyles = (rating) => ({
  card: {
    width: { xs: 350, sm: 400, md: 600 },
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
    bgcolor: rating === "N/A" ? 'white' : rating >= 4 ? '#3f51b5' : rating >= 3 ? '#FFFFBF' : rating <= 2 ? 'red' : '#E78587',
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
})

export default profCardStyles;
