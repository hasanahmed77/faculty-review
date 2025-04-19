export const cardDetailsStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "7rem",
    marginBottom: "2rem",
  },
  button: {
    marginY: 2,
    marginBottom: 5,
    color: 'black', 
    borderColor: 'black', 
    '&:hover': {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0.01)', 
    },
  },
  reviewsHeader: {
    marginBottom: 5, 
    fontStyle: "italic", 
    textDecoration: "underline", 
    fontWeight: "light"
  }
};
